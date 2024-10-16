// Clicker App
let count = 0;

let displayNum = document.getElementById("count-el")
displayNum.innerText = count;

function increment() {
    count++;
    displayNum.innerText = count;
    console.log(count);
}