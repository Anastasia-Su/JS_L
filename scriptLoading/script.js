"use strict";
function loadScript(source) {
    const script = document.createElement('script');
    script.src = source;
    script.async = false;
    document.body.append(script);
};
loadScript('test.js');
loadScript('some.js');
