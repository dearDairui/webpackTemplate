function getCompnentes() {
  return import('loadsh').then(({
    default: loadsh,
  }) => {
    const dom = document.createElement('div')
    dom.innerHTML = loadsh.join(['hello', 'async'], ' ')
    return dom
  })
}

const dom = document.createElement('button')
dom.innerHTML = 'button'
document.body.append(dom)
dom.addEventListener('click', () => {
  getCompnentes().then((res) => {
    document.body.append(res)
    res.addEventListener('click', () => {
      console.log(11)
    })
  })
})
