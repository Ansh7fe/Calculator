// initializing variable
let display=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
   item.addEventListener("click",(e)=>{
       buttonTxt=e.target.innerText;
       console.log("button is",buttonTxt);
       if(buttonTxt=='X'){
           buttonTxt="*";
           screenValue+=buttonTxt;
           display.value=screenValue ;
       }
       else if(buttonTxt=='÷'){
           buttonTxt='/';
           screenValue+=buttonTxt;
           display.value=screenValue ;
       }
       else if(buttonTxt=='C'){
           screenValue=""
           display.value=screenValue;
       }
        else if(buttonTxt=='='){
           display.value=eval(screenValue);
       }
       else{
        screenValue+=buttonTxt;
        display.value=screenValue ;
       }
   })
}
