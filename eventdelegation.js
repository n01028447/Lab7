const myList = document.getElementById("myList");

function highlight(event) {
    if (event.target.tagName === "LI") {
        alert("You clicked: " + event.target.textContent);
        
        event.target.style.color = "yellow";
        event.target.style.backgroundColor = "pink"; 
    }
}

myList.addEventListener('click', highlight); 