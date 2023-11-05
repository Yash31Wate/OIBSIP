const inptask=document.getElementById("inp-task");
const contents=document.getElementById("contents");


function addtask(){
     let li=document.createElement("li");
    if(inptask.value === ''){
       
        alert("Please write your task");
    }
    else{
        li.innerHTML=inptask.value;
        contents.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inptask.value='';
}
contents.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("firest");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);