/// execute_script.js
if (new URL(window.location.href).hostname.match(/(^|.)youtube./)) setInterval(() => {
    Array.from(document.querySelectorAll("head > style"))
        .filter(el => !!el.textContent.match(/{s*displays*:s*nones+!importants*;?s*}/i))
        .forEach(el => el.remove());
}, 500);
