let fNum=document.querySelector("#num-1");
let sNum=document.querySelector("#num-2");
let equalBtn=document.querySelector("#equal");
let opertorBetween=document.querySelector("#operator");
let multiple=document.querySelector(".multiple");
let taqsim=document.querySelector(".div");
let pluss=document.querySelector(".pluss");
let minus=document.querySelector(".minus");
let resualt=document.querySelector("#resualt");

loadEventlistener();

function loadEventlistener(){
    equalBtn.addEventListener('click', calc);
    taqsim.addEventListener('click',divFunc)
    minus.addEventListener('click',minusFunc);
    pluss.addEventListener('click',plussFunc);
    multiple.addEventListener('click',multipleFunc);
}

function calc(){
    if(fNum.value===''){
        alert('Please enter your fist number!');
    }else if(opertorBetween.value===''){
        alert('Please select a operator!');
    }else if(sNum.value===''){
        alert('Please enter your second number!')
    }
    let answer;
    let firstNum=Number(fNum.value);
    let secondNum=Number(sNum.value);
    switch(opertorBetween.value){
        case '+':
            answer=firstNum+secondNum;
            break;
        case '-':
            answer=firstNum-secondNum;
            break;
        case '*':
            answer=firstNum*secondNum;
            break;
        case '/':
            answer=firstNum/secondNum;                                                                                                  Math;
            break;
        default:
            alert('This operator is not defualt');
    }
    resualt.value=answer;
}
function minusFunc(){
    opertorBetween.value='';
    opertorBetween.value='-';
}
function multipleFunc(){
    opertorBetween.value='';
    opertorBetween.value='*';
}
function plussFunc(){
    opertorBetween.value='';
    opertorBetween.value='+';
}
function divFunc(){
    opertorBetween.value='';
    opertorBetween.value='/';
}               