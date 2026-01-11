/* ================================
   AAC APP SECURITY MODULE
   ================================ */

const LOCK_KEY = "aac-app-locked";
const PIN_KEY = "aac-caregiver-pin";

/* -------- DEFAULTS -------- */
const DEFAULT_PIN = "1234";
const SUPER_USER_PIN = "04265";
const SUPER_USER_EMAIL = "createdbypo@gmail.com";

/* -------- INIT -------- */
if (!localStorage.getItem(PIN_KEY)) {
  localStorage.setItem(PIN_KEY, DEFAULT_PIN);
}

if (!localStorage.getItem(LOCK_KEY)) {
  localStorage.setItem(LOCK_KEY, "true");
}

/* -------- LOCK STATE -------- */
export function isLocked() {
  return localStorage.getItem(LOCK_KEY) === "true";
}

export function lockApp() {
  localStorage.setItem(LOCK_KEY, "true");
}

export function unlockApp() {
  localStorage.setItem(LOCK_KEY, "false");
}

/* -------- PIN -------- */
export function unlockWithPin(pin) {
  const saved = localStorage.getItem(PIN_KEY);
  if (pin === saved || pin === SUPER_USER_PIN) {
    unlockApp();
    return true;
  }
  return false;
}

export function setNewPin(newPin) {
  if (!newPin || newPin.length < 4) return false;
  localStorage.setItem(PIN_KEY, newPin);
  return true;
}

export function getSuperUserHint() {
  return SUPER_USER_EMAIL;
}
