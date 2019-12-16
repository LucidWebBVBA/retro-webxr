const chromeSemverPattern = /Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/;

const getChromeSemver = (pattern) => {
    const semver = (
        navigator
            .userAgent
            .match(pattern || chromeSemverPattern)
    );

    if (semver == null || semver.length != 5) {
        return {
            major: -1,
            minor: -1,
            build: -1,
            patch: -1
        };
    }

    const chromeVersion = semver.map(ver => parseInt(ver, 10));

    return {
        major: chromeVersion[1],
        minor: chromeVersion[2],
        build: chromeVersion[3],
        patch: chromeVersion[4]
    };
}

const isFlagActive = flags => flagPath => flagPath.reduce((acc, k) => {
    const _acc = (acc || {});
    const flag = _acc[k];
    const allFlag = _acc.all;

    return (allFlag || flag) || false;
}, flags);

/**
 * @function
 * 
 * @param {Object} flags 
 * 
 * @param {Object} flags.browser
 * @param {Boolean} flags.browser.requestDevice Alias navigator.xr.requestDevice to navigator.xr.requestSession. Only for Chrome 79+.
 * 
 * @param {Boolean} flags.aframe
 * @param {Boolean} flags.aframe.assetItemGLBAsArrayBuffer Set `response-type="arraybuffer"` on `a-asset-item` when their src ends with `.glb`
 * 
 * @returns {Object} Applied changes
 * 
 * @example
 * import { useRetroWebXR } from '@lucidweb/retro-webxr';
 * 
 * useRetroWebXR({
 *  browser: {
 *    requestDevice: true
 *  },
 *  aframe: {
 *    assetItemGLBAsArrayBuffer: true
 *  }
 * });
 */
export const useRetroWebXR = (flags = {}) => {
    const changes = {};

    const isBrowserFlagActive = isFlagActive(flags.browser);
    const isAframeFlagActive = isFlagActive(flags.aframe);

    /* BROWSER FLAGS */
    if (isBrowserFlagActive(['requestDevice']) && getChromeSemver().major >= 79) {
        window.navigator.xr.requestDevice = window.navigator.xr.requestSession;

        changes['window.navigator.xr.requestDevice'] = 'window.navigator.xr.requestSession';
    }

    /* AFRAME FLAGS */
    if (isAframeFlagActive(['assetItemGLBAsArrayBuffer'])) {
        const assetItems = document.querySelectorAll('a-asset-item[src$=".glb"]');
        assetItems.forEach(assetItem => assetItem.setAttribute('response-type', 'arraybuffer'));

        changes.assetItemGLBAsArrayBuffer = assetItems;
    }

    return changes;
};

export default useRetroWebXR;

