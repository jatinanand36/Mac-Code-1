window.addEventListener("load",init);
var ID,NAME,PRICE,STATE,STATE2,STATE3;
function init(){
  document.querySelector("#sort").addEventListener("click",SORT);
  document.querySelector("#search").addEventListener("click",SEARCH);
  document.querySelector("#load").addEventListener("click",LOAD);
  ID=document.querySelector("#id");
  NAME=document.querySelector("#name"); 
  PRICE=document.querySelector("#price");
  STATE=document.querySelector("#inputState");
  STATE2=document.querySelector("#inputState2");
  STATE3=document.querySelector("#inputState3"); 
}
 
function SORT(){
 
   
 if(STATE.value==="NAME"){
    console.log(`  ${NAME.value}`);
 }
 else if(STATE.value==="ID"){
    console.log(` ${ID.value}`);
 }
 else if(STATE.value==="PRICE"){
    console.log(`  ${PRICE.value}`);
 }
}
function SEARCH(){
    if(STATE2.value==="NAME"){
        console.log(`  ${NAME.value}`);
     }
     else if(STATE2.value==="ID"){
        console.log(` ${ID.value}`);
     }
     else if(STATE2.value==="PRICE"){
        console.log(`  ${PRICE.value}`);
     } 
}
function LOAD(){ 
    if(STATE3.value==="FROM JSON"){
        console.log(`  json`);
     }
     else if(STATE3.value==="FROM MYSTORAGE"){
        console.log(` localstorage`);
     }
}