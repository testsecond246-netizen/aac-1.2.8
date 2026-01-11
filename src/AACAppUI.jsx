import React, { useState, useEffect } from "react";
import PinDialog from "./PinDialog";
import SettingsDialog from "./SettingsDialog";
import PinChangeDialog from "./PinChangeDialog";
import { isLocked } from "./security";

export default function AACAppUI() {
  const [locked, setLocked] = useState(isLocked());
  const [showPin, setShowPin] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);

  const requireUnlock = (action) => {
    if (locked) {
      setShowPin(true);
      return;
    }
    action();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AAC Board</h1>

      <button onClick={() => requireUnlock(() => setShowSettings(true))}>
        Settings
      </button>

      <PinDialog
        open={showPin}
        onClose={() => setShowPin(false)}
        onSuccess={() => {
          setLocked(false);
          setShowPin(false);
        }}
      />

      <SettingsDialog
        open={showSettings}
        onClose={() => setShowSettings(false)}
        onChangePin={() => {
          setShowSettings(false);
          setShowChangePin(true);
        }}
      />

      <PinChangeDialog
        open={showChangePin}
        onClose={() => setShowChangePin(false)}
      />
    </div>
  );
}
