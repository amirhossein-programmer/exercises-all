let inNum=document.querySelector("#inNum");
let outNum=document.querySelector("#outNum");

loadEventListener();
function loadEventListener(){
    inNum.addEventListener("keyup",changeFont)
}
function changeFont(){
   outNum.value='';
   var val=inNum.value;
   const myNum=val.split("");
   const myOut=[];
//    console.log(myNum)
   for(var i=0;i<myNum.length;i++){
    // console.log(myNum[i])
   
    switch (myNum[i]){
        case'۰' :
         myOut[i]=0;
        break;
    case'۱' :
         myOut[i]=1;
        break;
    case'۲' :
         myOut[i]=2;
        break;
    case'۳' :
         myOut[i]=3;
        break;
    case'۴' :
         myOut[i]=4;
        break;
    case'۵' :
         myOut[i]=5;
        break;
    case'۶' :
         myOut[i]=6;
        break;
    case'۷' :
         myOut[i]=7;
        break;
    case'۸' :
         myOut[i]=8;
        break;
    case'۹' :
         myOut[i]=9;
        break;
   }
//    console.log(myOut[i]);
   outNum.value+=myOut[i];
   }

}