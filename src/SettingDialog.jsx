import React from "react";

export default function SettingsDialog({ open, onClose, onChangePin }) {
  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={box}>
        <h2>Settings</h2>

        <button onClick={onChangePin}>
          Change Caregiver PIN
        </button>

        <button onClick={onClose}>Close</button>
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
