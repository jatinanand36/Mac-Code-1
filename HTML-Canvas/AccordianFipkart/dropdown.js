window.addEventListener("load",init);
var btntoggle;
function init(){
//    btntoggle= document.getElementsByClassName('rambutton');
//     for(var i=0;i<btntoggle.length;i++){
//         btntoggle[i].addEventListener("click",doShowList);
//     }
    document.querySelector("#rambutton").addEventListener("click",doShowList);
    document.querySelector("#brandbutton").addEventListener("click",doShowList2);
}
var isShow=true;
var isShow=true;
function doShowList2(){
    if(!isShow){
        console.log("false");
     document.getElementById("brandlist").style.display='block';   
    document.querySelector('#brandbutton').style.transform = 'rotate(180deg)';
    
       isShow=!isShow; 
    }
    else if(isShow){
        document.getElementById("brandlist").style.display='none';   
       document.querySelector('#brandbutton').style.transform = 'rotate(0deg)';
          
       isShow=!isShow; 
      
    }
}
function doShowList(){
   
 if(!isShow){
     console.log("false");
    document.getElementById("ramlist").style.display='block';   
 document.querySelector('#rambutton').style.transform = 'rotate(180deg)';
 
    isShow=!isShow; 
 }
 else if(isShow){
     console.log("true");
    document.getElementById("ramlist").style.display='none'; 
    document.querySelector('#rambutton').style.transform = 'rotate(0deg)';
       
    isShow=!isShow; 
   
 }
 

}