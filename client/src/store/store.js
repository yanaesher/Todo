import initialState from "./initialState.js";

let state = { ...initialState };
const listeners = [];

export function getState() {
  return state;
}

export function subscribe(listener) {
  listeners.push(listener);
}

export function setState(newState) {
  state = { ...state, ...newState };
  listeners.forEach((listener) => listener(state));
}
