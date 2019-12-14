# @lucidweb/retro-webxr

## Why?
It is not always possible to upgrade to the latest version without breaking changes. Handling breaking changes requires time and careful planning.
This package aims to maintain a certain level of compatibility for past projects using previous versions of A-Frame.

## What?
This package is bundled as an UMD bundle and expose one function, `useRetroWebXR` which takes an `Object` toggling compatibility flags.

### Current flags
- `all`: `useRetroWebXR({ all: true })` apply all changes, ignoring other flags.
- `requestDevice`: `useRetroWebXR({ requestDevice: true })` alias `navigator.xr.requestDevice` to `navigator.xr.requestSession`. *Only for **Chrome 79+***.

## How?

### Install
`npm install @lucidweb/retro-webxr`

### Use

#### CJS
```js
const { useRetroWebXR } = require('@lucidweb/retro-webxr');

useRetroWebXR();
```

#### ES2015
```js
import { useRetroWebXR } from '@lucidweb/retro-webxr';

useRetroWebXR();
```

#### window.RetroWebXR
```html
<script type="text/javascript" src="https://unpkg.com/@lucidweb/retro-webxr@^1/dist/index.js"></script>
```

```js
window.RetroWebXR.useRetroWebXR();
```