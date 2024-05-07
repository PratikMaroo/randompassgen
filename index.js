const uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()~_+/-=";

const passBox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const randomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatepassword = (password = "") => {
    const length = parseInt(totalchar.value);
    if (length > 20) {
        passBox.innerText = "Enter a smaller number";
        return;
    }
    if(upperInput.checked){
        password += randomdata(uppercase);
    }
    if(symbolInput.checked){
        password += randomdata(symbols);
    }
    if(lowerInput.checked){
        password += randomdata(lowercase);
    }
    if(numberInput.checked){
        password += randomdata(numbers);
    }
    if(password.length < totalchar.value){
      return  generatepassword(password);
    }
    else

    passBox.innerText = substrfun(password,totalchar.value);
}



generatepassword();

document.getElementById("btn").addEventListener("click",
    function(){
        generatepassword();
    }
);

function substrfun(str,num){
 if(str.length > num){
    let subStr = str.substring(0,num);
    return subStr;
 }
 else 
 return str;
};