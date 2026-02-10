let count = 0;

const myButton = document.querySelector('.btn-primary');
const mainTitle =
document.querySelector('h1'); 
const nameInput = document.querySelector('.name-input');

myButton.addEventListener('click', function() {
    const userName = nameInput.value;
    if (userName === "") {
        alert("Please enter your name");
    } else {
        count = count + 1;
        mainTitle.textContent = "Good morning, " + userName + "! You clicked"
         + count + " times!";
    }
    count = count + 1;
    mainTitle.textContent = "You the best: " + count;
    if (count < 10){ 
        mainTitle.style.color = "blue";
    } else if (count >= 10 && count < 20) {
        mainTitle.style.color = "orange";
        mainTitle.style.fontSize = "40px";
    } else {
        mainTitle.style.color = "red";
        mainTitle.style.fontSize = "60px";
        mainTitle.textContent = "Mbappe is the best player in the world: " + count;
    }
});

const resetButton = document.querySelector('.btn-reset');
resetButton.addEventListener('click', function() {
    count = 0;
    mainTitle.textContent = "Hi this is my road to frontend development";
    mainTitle.style.color = "black";
    mainTitle.style.fontSize = "30px";
    console.log("Counter reset");
});