const pwEl = document.getElementById('pw')
const lenEl = document.getElementById("len")
const LowerCaseEl = document.getElementById("LowerCase")
const UpperCaseEl = document.getElementById("UpperCase")
const NumberEl = document.getElementById("Number")
const SymbolEl = document.getElementById("Symbol")
const btnEl = document.getElementById("btn")
const copyEl = document.getElementById('copy')


const  lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const  numbers = "12345678910";
const symbols= "!@#$%^&*()"

function GetLowercase (){
    return lowerLetter[Math.floor(Math.random()*lowerLetter.length)]
}

function GetUpperCase (){
    return upperLetter[Math.floor(Math.random()*upperLetter.length)]
}

function GetNumbers (){
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function GetSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}


function generate(){
    const len = lenEl.value;

    let password = ""

    if(LowerCaseEl.checked){
        password += GetLowercase()
    }


    if(UpperCaseEl.checked){
        password += GetUpperCase()
    }
    if(NumberEl.checked){
        password += GetNumbers()
    }
    if(SymbolEl.checked){
        password += GetSymbols()
    }

    for(let i= password.length; i < len; i++){
        const a = generateX()
        password += a;
    }

    pwEl.innerText = password;
}

function generateX(){
    const x = [];
    if(LowerCaseEl.checked){
        x.push(GetLowercase())
    }
    if(UpperCaseEl.checked){
        x.push(GetUpperCase())
    }
    if(NumberEl.checked){
        x.push(GetNumbers())
    }
    if(SymbolEl.checked){
        x.push(GetSymbols())
    }
    if(x.length == 0 ){
        return ""
    }
    return x[Math.floor(Math.random()*x.length)]
    
}


btnEl.addEventListener('click',generate);


copyEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    const password = pwEl .innerText;
    if(!password){
        return;
    }
    
    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand("copy");
    textarea.remove()
    alert("password copied to clipboard")

})

$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});





