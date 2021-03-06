import { qs } from '@okiba/dom'
import Component from '@okiba/component'
import SmoothScroll from '../../../packages/smooth-scroll'

const app = new Component({
  el: qs('#app'),
  components: [
    {
      ghost: true,
      type: SmoothScroll
    }
  ]
})
