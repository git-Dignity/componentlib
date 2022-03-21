const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
const directives = {
  draggable: {
    inserted: (el, binding, vnode) => {
      console.log(vnode);
      const triggerDom = el.querySelector(binding.value.trigger)
      if (!triggerDom) return

      triggerDom.style.cursor = 'move'
      const bodyDom = el
      let pageX = 0
      let pageY = 0
      // let transformX = 0
      // let transformY = 0
      let canMove = false
      let top = 0
      let left = 0

      const handleMousedown = e => {
        // let transform = /\(.*\)/.exec(bodyDom.style.transform)
        // if (transform) {
        //     transform = transform[0].slice(1, transform[0].length - 1)
        //     let splitxy = transform.split('px, ')
        //     transformX = parseFloat(splitxy[0])
        //     transformY = parseFloat(splitxy[1].split('px')[0])
        // }
        pageX = e.pageX
        pageY = e.pageY
        top = bodyDom.offsetTop
        left = bodyDom.offsetLeft
        canMove = true
      }
      const handleMousemove = e => {
        // let xOffset = e.pageX - pageX + transformX
        // let yOffset = e.pageY - pageY + transformY
        // // if (canMove) bodyDom.style.transform = `translate(${xOffset}px, ${yOffset}px)`
        if (canMove) {
          var computedStyle
          if (window.getComputedStyle) {
            computedStyle = getComputedStyle(bodyDom, null)
          } else {
            computedStyle = bodyDom.currentStyle // 兼容IE的写法
          }
          const ml = Number(computedStyle.marginLeft.replace('px', ''))
          const mt = Number(computedStyle.marginTop.replace('px', ''))

          bodyDom.style.left = left - ml + e.pageX - pageX + 'px'
          const t = top + e.pageY - pageY
          if (t < 0) {
            bodyDom.style.top = -mt + 'px'
          } else if (t > window.innerHeight) {
            bodyDom.style.top = window.innerHeight - 20 - mt + 'px'
          } else {
            bodyDom.style.top = t - mt + 'px'
          }
          bodyDom.style.bottom = 'unset'
        }
      }
      const handleMouseup = e => {
        console.log(e);
        canMove = false
      }
      on(triggerDom, 'mousedown', handleMousedown)
      on(document, 'mousemove', handleMousemove)
      on(document, 'mouseup', handleMouseup)
    },
    update: (el, binding, vnode) => {
      console.log(vnode);
      if (!binding.value.recover) return
      const bodyDom = el
      bodyDom.style.transform = ''
    }
  }
}

export default directives
