/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
let myVariable;
myVariable = 'bob';
*/

//let myVariable = 'bob';

/*
let iceCream = 'チョコレート';
if(iceCream === 'チョコレー'){
    alert('やった、チョコレートアイス大好き!');
}else{
    alert('あれれ、でもチョコレートは私のお気に入り.....');
}
*/

/*
function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}
*/

/*
document.querySelector('html').onclick = function(){
    alert('痛い');
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Squalll Lionheart.png'){
        myImage.setAttribute('src','images/Blinking Discord.bk01.gif');
    } else {
        myImage.setAttribute('src','images/Squalll Lionheart.png');
    }
}

function setUserName(){
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === null){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Tatsuohを構ってください、' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tatsuohを構ってください、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

