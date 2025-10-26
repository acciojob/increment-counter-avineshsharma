//your JS code here. If required.
let counter = 0;
function increment() {
	counter++;
	document.getElementById("counter").textContent = counter;
}

document.getElementById("incrementBtn").addEventListener("click", increment);
