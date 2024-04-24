/// execute_script.js
window.setInterval(() => {
    let els = Array.from(document.querySelectorAll("head > style"))
        .filter(el => el.innerText.match(/{s*displays*:s*nones+!importants*;?s*}/i));
    els.forEach(el => el.innerText = "");
    if (els.length > 0) alert(`finished removing the ${els.length} youtube restructions boss! luphoria would be proud.`);
}, 500);
