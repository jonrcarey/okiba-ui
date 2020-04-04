

# Okiba / Pointer
A wrapper class that collects normalized (both mouse and touch) pointer information




```javascript
import { Pointer } from '@okiba/pointer'
import { MyCanvasApp } from '../path/to/my/components'

window.requestAnimationFrame(() => {
 MyCanvasApp.update(Pointer.coords, Pointer.target)
})
```



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/lib/Pointer
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/lib/Pointer@1.0.1/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/lib/Pointer@1.0.1/dist/index.js"></script>
```







## coords()


Coords getter







#### Returns

`Object` {x, y}
## target()


Last event target getter







#### Returns

`Event` 
## inview()


Returns pointer inview status







#### Returns

`Boolean` 
## lastEvent()


Last event getter







#### Returns

`Event` 
## matches(selectors, testAncestors)


Checks if last event target matches with given selectors







#### Arguments


##### + `selectors`: `Array.<String>`

The selectors list


##### + `testAncestors`: `Boolean`

If true, extends match test upward in the ancestors





#### Returns

`String` 