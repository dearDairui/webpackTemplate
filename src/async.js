function getCompnentes() {
   return import('loadsh').then(({
        default: _
    }) => {
        const dom = document.createElement("div")
        dom.innerHTML = _.join(['hello','async'],' ')
        return dom
    })
}


let dom  = document.createElement('button')
dom.innerHTML="button"
document.body.append(dom)
dom.addEventListener("click",()=>{
    getCompnentes().then(res=>{
    
        document.body.append(res)
        res.addEventListener("click",()=>{
            console.log(11)
        })
    })
})

