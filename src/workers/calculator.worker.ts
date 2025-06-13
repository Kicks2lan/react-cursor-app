// Add type definitions for Web Worker
declare const self: Worker;

// Make it a module
export {};

// Define the message handler
self.onmessage = (e: MessageEvent) => {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  self.postMessage(t);
}; 