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

const useRetroWebXR = (flags = { all: true }) => {
    const changes = {};

    if ((flags.all || flags.requestDevice) && getChromeSemver().major >= 79) {
        window.navigator.xr.requestDevice = window.navigator.xr.requestSession;
        changes['window.navigator.xr.requestDevice'] = 'window.navigator.xr.requestSession';
    }

    return changes;
}