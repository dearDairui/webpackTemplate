// eslint-disable-next-line import/named
import { add } from './math.js';

console.log(add(1, 3))
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then((regis) => {
      console.log('sw res', regis);
    }).catch((err) => {
      console.error(err)
    });
  })
}
