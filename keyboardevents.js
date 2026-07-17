const input = document.querySelector("#keyboard");
const output = document.getElementById("output");

function onekey(event) {
    output.textContent += event.code
}

input.addEventListener("keypress", onekey);
