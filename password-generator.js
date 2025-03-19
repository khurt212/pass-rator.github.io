const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*-+=?";

const generateButton = document.getElementById("generate-button").addEventListener("click", generate);




const result = document.getElementById("result");

const copybutton = document.getElementById("copybutton");

copybutton.onclick = function (){
    result.select()
    document.execCommand("copy")
}

 function generate() {
    let character = "";

    if(document.getElementById("lower-option").checked)
        {character += lowercase;}
    if(document.getElementById("upper-option").checked)
        {character += uppercase;}
    if(document.getElementById("number-option").checked)
        {character += numbers;}
    if(document.getElementById("symbol-option").checked)
        {character += symbols;} 


const length = Number(document.getElementById("password-length").value);
let password = "";

for (let i = 0; i < length; i++){
    
    const index = Math.floor(Math.random() * character.length);
    password += character[index];   
}
    result.value =  password;

}









