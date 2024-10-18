// Clicker App
let count = 0;
let entries = document.getElementById("entries")

let displayNum = document.getElementById("count-el")
displayNum.innerText = count;

function increment() {
    count++;
    displayNum.innerText = count;
    console.log(count);
}

function save() {
    entries.innerHTML += count + " - "
}