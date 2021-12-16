import $ from 'jquery';
import img from './assets/logo512.png';
import txt from './assets/1.txt';
import './assets/1.css';
import './assets/1.less';
import data from './assets/da.xml';
import './async.js';
import './app.ts';

console.dir($)
console.log(img, txt, data);
const domImg = document.createElement('img');

domImg.src = img;
document.body.append(domImg);

const dom = document.createElement('button');
dom.innerHTML = 'buttonAsync';
document.body.append(dom);
dom.addEventListener('click', () => {
  // webpackPrefetch:true
  import(/* webpackChunkName: 'math', webpackPreload:true */'./math').then(({ add }) => {
    console.log(add(4, 6));
  });
});

if (module.hot) {
  console.log('====>hotee');
  module.hot.accept('./another-module.js', () => {
    console.log(' file change');
  });
}
// works 使用
const work = new Worker(new URL('./work.js', import.meta.url))
work.postMessage('hello works')
work.onmessage = (msg) => {
  console.log(msg)
};
