let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/you.png') {
      myImage.setAttribute ('src','images/you2.png');
    } else {
      myImage.setAttribute ('src','images/you.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'welcome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'welcome back,' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
