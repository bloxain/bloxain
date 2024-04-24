/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && event.which === 192) {
        let els = Array.from(document.querySelectorAll("head > style"))
            .filter(el => el.innerText.match(/{\s*display\s*:\s*none\s+!important\s*;?\s*}/i));
        els.forEach(el => el.innerText = "");
        if (els.length > 0) alert(`finished removing the ${els.length} youtube restructions boss! luphoria would be proud.`);
        else alert("nothing found :(");
    }
    if (!window.eruda && event.ctrlKey && !event.altKey && event.shiftKey && !event.metaKey && event.which === 192) {
        var script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/eruda";
        script.onload = function () { eruda.init(); alert("eruda loaded"); };
        document.body.appendChild(script);
    }
});
