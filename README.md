# @lucidweb/retro-webxr

## Why?
It is not always possible to upgrade to the latest version without breaking changes. Handling breaking changes requires time and careful planning.
This package aims to maintain a certain level of compatibility for past projects using previous versions of A-Frame.

## What?
This package is bundled as an UMD bundle and expose one function, `useRetroWebXR` which takes an `Object` toggling compatibility flags.

[Semantic versioning](https://semver.org/) is used to make sure nothing breaks if there is a module API change.

### Current flags
- `browser.requestDevice`: Alias `navigator.xr.requestDevice` to `navigator.xr.requestSession`. *Only for **Chrome 79+***
- `aframe.assetItemGLBAsArrayBuffer`: Set `response-type="arraybuffer"` on `a-asset-item` when their src ends with `.glb`

## How?

### Install
`npm install --save @lucidweb/retro-webxr`

### Use

#### CJS
```js
const { useRetroWebXR } = require('@lucidweb/retro-webxr');

useRetroWebXR({
    browser: {
        requestDevice: true
    },
    aframe: {
        assetItemGLBAsArrayBuffer: true
    }
});
```

#### ES2015
```js
import { useRetroWebXR } from '@lucidweb/retro-webxr';

useRetroWebXR({
    browser: {
        requestDevice: true
    },
    aframe: {
        assetItemGLBAsArrayBuffer: true
    }
});
```

#### window.RetroWebXR
```html
<script type="text/javascript" src="https://unpkg.com/@lucidweb/retro-webxr@^2/dist/index.js"></script>
```

```js
window.RetroWebXR.useRetroWebXR({
    browser: {
        requestDevice: true
    },
    aframe: {
        assetItemGLBAsArrayBuffer: true
    }
});
```