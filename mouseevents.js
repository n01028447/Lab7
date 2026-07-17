const box = document.getElementById("box");

function change(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "For Cocoa Puffs 🤪";
    event.target.style.color = "yellow";
}

function changeBack(event) {
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Cuckoo 🐦";
    event.target.style.color = "green";
}

box.addEventListener("mouseover", change);
box.addEventListener("mouseout", changeBack);
