import {add} from "./package/index" ;
import img from "./assets/logo512.png"
import txt from "./assets/1.txt"
import  "./assets/1.css"
import  "./assets/1.less"
import data from "./assets/da.xml"
import "./async.js"
console.log(img,txt,data)
let domImg = document.createElement("img")

domImg.src = img 
document.body.append(domImg)

console.log(add(1,2))

function getString(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("hello")
        }, 1000);
    })
}
async function gets(){
    let str = await getString()
    console.log(str)
}
gets()




let dom  = document.createElement('button')
dom.innerHTML="buttonAsync"
document.body.append(dom)
dom.addEventListener("click",()=>{
    // webpackPrefetch:true
  import(/* webpackChunkName: 'math', webpackPreload:true */"./math").then(({add})=>{
    console.log(add(4,6))
  })
})
