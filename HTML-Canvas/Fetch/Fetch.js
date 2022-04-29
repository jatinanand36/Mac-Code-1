window.addEventListener("load",init);
function init(){
    document.querySelector("#btn").addEventListener("click",doazux);
}
function doazux(){
    console.log(`doazux...`);
    var pr= new Promise(function(resolve,reject){
           fetch("http://localhost:5001/mobiles").then(success,fail);
           function success(response){
              response.json().then(function(D){
                console.log(D);
                resolve(D);
              });
           }
           function fail(F){
              console.log(F);
              reject(F);
           }
    });
    pr.then(function(S){console.log(S);
        MobileOperation.PrepareItem(S);
        //MobileOperation.GetItem().filter((io)=>io.id===200001);

        MobileOperation.GetItem().forEach((io)=>console.log(`${io.name}`));
       // console.log(`${this.responseText}`);
         //document.getElementById("num").innerHTML=MobileOperation.GetItem().length;
        // var ul= document.getElementById("songList");
      
        var tb = document.getElementById("tbodylist");
        tb.innerHTML="";
        MobileOperation.GetItem().forEach(printRow);
      
    // //     MobileOperation.GetItem().forEach(function(io){
    // // var li= document.createElement("li");
    // // var img = document.createElement("img");

    // // img.setAttribute("src",io.url);
    // // li.innerHTML= io.id +" | "+io.name+" | "+io.price;
    // // li.appendChild(img);
    // // ul.appendChild(li);
    //     });
    },function(F){console.log(F)});
}
function printRow(io){
    var tablebody = document.querySelector("#tbodylist");
    var tr=tablebody.insertRow();
    let index=0;
    for(let key in io){
        
        if(key=="url"){
            tr.insertCell(index).innerHTML=`<img class='url' src='${io[key]}'/>`;
            index++;
            continue;
         }
         tr.insertCell(index).innerHTML=io[key];
        index++;
    }
    var operationtd = tr.insertCell(index);
 //    var id = itemObject.id;
 //   operationTd.appendChild(createIcon(id,"images/delete.png",toggleMarkUnMark));
 //   operationTd.appendChild(createIcon(id,"images/edit.png",edit));
 var btn = document.createElement("button");
 btn.innerHTML="M";
 btn.className="btn btn-danger"
 btn.addEventListener("click",doMark);   
 operationtd.appendChild(btn);
 operationtd.appendChild(createIcon("images/delete.png"));
 
 }
 function createIcon(path){
   var img = document.createElement("img");
   img.src=path;
   img.className="icon";
   //img.setAttribute("i-d",id);
   img.addEventListener("click",doMark);
   return img;
 }
 function doMark(){
     console.log(`called mark..`);
 }