const myTitle = document.querySelector('h1');
const chgUsernameButton = document.querySelector('button');

function changeUsername() {
    let myName = prompt('What is your new Username?')
    if(!myName){
        changeUsername();
    }else{
        localStorage.setItem('name', myName);
        myTitle.textContent = 'Salut,' + ' ' + localStorage.getItem('name');
    }
}

if(localStorage.getItem('name') === null){
    changeUsername();
}else {
    myTitle.textContent = 'Salut,' + ' ' + localStorage.getItem('name');
}

chgUsernameButton.onclick = function() {
    changeUsername();
}