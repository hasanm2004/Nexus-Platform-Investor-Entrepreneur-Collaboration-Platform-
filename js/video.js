const micBtn = document.getElementById("micBtn");
const camBtn = document.getElementById("camBtn");

let mic = true;
let cam = true;

micBtn.addEventListener("click", () => {

mic = !mic;

micBtn.innerHTML = mic
? "Mic On"
: "Mic Off";

});

camBtn.addEventListener("click", () => {

cam = !cam;

camBtn.innerHTML = cam
? "Camera On"
: "Camera Off";

});

document.getElementById("endBtn")
.addEventListener("click", () => {

alert("Call Ended");

window.location.href = "dashboard.html";

});