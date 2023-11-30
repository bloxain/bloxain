// Loads Eruda, a portable JS console.
// Code modified by pajamaclaws21 but not created by pajamaclaws21
// Run loadEruda() load.
function loadEruda() {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init()
  } 
}

// Loads Web X-ray, a portable page editor.
// Code modified by pajamaclaws21 but not created by pajamaclaws21
// Run loadWebxray() to load.
function loadWebxray() { 
  var script = document.createElement('script'); 
  script.src = 'https://x-ray-goggles.mouse.org/webxray.js'; 
  script.className = 'webxray'; 
  script.setAttribute('data-lang', 'en-US'); 
  script.setAttribute('data-baseuri', 'https://x-ray-goggles.mouse.org'); 
  document.body.appendChild(script); 
}

// Loads Jobby (aka Pocket Unfolder), a portable AllOrigins viewer.
// Code created by pajamaclaws21. AllOrigins not created by pajamaclaws21
// Run loadJobby() with the input url to load. Recommended: loadJobby(prompt("url"))
function loadJobby(yoururl) {
  var link = "https://api.allorigins.win/raw?url=" + yoururl;
  if (document.getElementById('jobbyframe') == null){
    var wrapper = document.createElement('div');
    wrapper.style = "border-radius: 20px; border: 5px solid black; overflow: auto; height: 10vh; width: 10vw; resize: both;";
    var jobbyframe = document.createElement('iframe');
    jobbyframe.id = "jobbyframe";
    jobbyframe.src = link;
    jobbyframe.style = "border: 0px; height: inherit; width: inherit;";
    wrapper.appendChild(jobbyframe);
    document.body.appendChild(wrapper);
  } else {
    document.getElementById("jobbyframe").src = link;
  }
}
