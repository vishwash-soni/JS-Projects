const passwordBox = document.getElementById("password");
const lenth = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "@#$&?/!*%";
const combine = upperCase+lowerCase+number+specialSymbol;

function createPass(){
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
    while(pass.length < lenth){
        pass+=combine[Math.floor(Math.random() * combine.length)];
    }
    passwordBox.value = pass;
}

function copyPass(){
    passwordBox.select();
    document.execCommand('copy');
}

