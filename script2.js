let area=document.getElementById('box');
let click=document.querySelectorAll('button');

let string="";


 function appendToArea(value){
    string+=value;
    area.value=string;
 }

 function clearResult(){
    string="";
    area.value="";
 }

 function clearLast(){
    string=string.slice(0,-1);
    area.value=string;
 }

   let inpu=Array.from(click);
   inpu.forEach(button=>{
      button.addEventListener('click',(e)=>{
         if(e.target.innerHTML=='='){
            string=eval(string);
            area.value=string;
         }
      })
   })
 /*function calculateOutput(){
    try{
        string=eval(string);
        area.value=string;
    }
    catch{
        area.value="Error";
        string="";
    }
 }*/