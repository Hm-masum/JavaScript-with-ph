console.log('This is js file')
//....option 2
function makeRed(){
    document.body.style.backgroundColor='red';
}

//....option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick= makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//....option 4
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick= function makePurple(){
    document.body.style.backgroundColor='purple';
}

//....option 5
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)
function makePink(){
    document.body.style.backgroundColor='pink';
}

//....option 6
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
})

//....option 7(final)
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
})