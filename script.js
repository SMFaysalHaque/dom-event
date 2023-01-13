// 1.
function makeBackgroundRed(){
    document.body.style.backgroundColor = 'red';
}

// 2. handle blue button click by setting function name
// get the button key by tag id
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
console.log(blueButton);
blueButton.onclick = makeBlue;
// blue button function
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// 3. handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
console.log(greenButton);
// anonymous function
greenButton.onclick = function(){
    document.body.style.backgroundColor = "green";  
}

// 4. handle by using addEventListener
const tomatoButton = document.getElementById('make-tomato-button');
console.log(tomatoButton);
tomatoButton.addEventListener('click', makeTomatoButton);

function makeTomatoButton(){
    document.body.style.backgroundColor = 'tomato';
}

// 5. handle by using addEventListener
const slateBlueButton = document.getElementById('make-slateblue-button');
console.log(slateBlueButton);
// anonymous function and directly button click method
slateBlueButton.addEventListener('click', function(){
    document.body.style.backgroundColor = "slateblue";
})

// 6. handle by using addEventListener (short way) and anonymous function
document.getElementById('make-hotpink-button').addEventListener('click', function(){
    document.body.style.backgroundColor = "hotpink";
})