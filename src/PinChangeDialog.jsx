import React, { useState } from "react";
import { setNewPin } from "./security";

export default function PinChangeDialog({ open, onClose }) {
  const [pin, setPin] = useState("");

  if (!open) return null;

  const save = () => {
    if (setNewPin(pin)) {
      alert("PIN updated");
      setPin("");
      onClose();
    } else {
      alert("PIN must be 4+ digits");
    }
  };

  return (
    <div style={overlay}>
      <div style={box}>
        <h2>Change Caregiver PIN</h2>

        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="New PIN"
        />

        <div style={{ marginTop: 10 }}>
          <button onClick={save}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const box = {
  background: "white",
  padding: 20,
  borderRadius: 10,
  width: 260,
};
