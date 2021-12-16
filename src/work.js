/* eslint-disable no-restricted-globals */
self.onmessage = (msg) => {
  // eslint-disable-next-line no-restricted-globals
  self.postMessage(`${msg.data} get msg`);
}
