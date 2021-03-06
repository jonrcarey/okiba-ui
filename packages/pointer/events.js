import { eventCoords } from '@okiba/dom'
import { hasTouch } from '@okiba/detect'

export const pointermove = {
  alias: 'pointermove',
  type: hasTouch ? 'touchmove' : 'mousemove',
  target: window,
  payloadFilter: e => {
    const { clientX: x, clientY: y } = eventCoords(e)
    return { coords: { x, y }, event: e }
  }
}

export const pointerinview = {
  alias: 'pointerinview',
  type: hasTouch ? ['touchstart', 'touchend'] : ['mouseenter', 'mouseleave'],
  target: document,
  payloadFilter: e => ({
    inview: ['touchstart', 'mouseenter'].includes(e.type),
    event: e
  })
}

export const pointerover = {
  alias: 'pointerover',
  type: hasTouch ? 'touchmove' : 'mouseover',
  target: document.body
}

export const pointerdown = {
  alias: 'pointerdown',
  type: hasTouch ? 'touchstart' : 'mousedown',
  target: window
}

export const pointerup = {
  alias: 'pointerup',
  type: hasTouch ? 'touchend' : 'mouseup',
  target: window
}

export default [
  'pointermove',
  'pointerinview',
  'pointerover',
  'pointerdown',
  'pointerup'
]
