import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getSuperUserHint, unlockWithPin } from "./security";

export default function PinDialog({ open, onClose, onSuccess }) {
  const [pin, setPin] = useState("");

  const handlePress = (num) => {
    if (pin.length < 6) setPin((p) => p + num);
  };

  const handleClear = () => setPin("");

  const handleUnlock = () => {
    if (unlockWithPin(pin)) {
      setPin("");
      onSuccess();
    } else {
      alert("Incorrect PIN");
      setPin("");
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Caregiver Access</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center mb-3 text-xl tracking-widest">
          {"•".repeat(pin.length).padEnd(4, "○")}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6,7,8,9].map((n) => (
            <Button key={n} onClick={() => handlePress(n.toString())}>
              {n}
            </Button>
          ))}
          <Button variant="outline" onClick={handleClear}>Clear</Button>
          <Button onClick={() => handlePress("0")}>0</Button>
          <Button variant="secondary" onClick={handleUnlock}>Unlock</Button>
        </div>

        <div className="text-xs text-center mt-4 text-muted-foreground">
          Forgot your PIN? Contact admin: <br />
          <strong>{getSuperUserHint()}</strong>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
