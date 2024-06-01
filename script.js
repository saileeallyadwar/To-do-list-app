const btn = document.querySelector("button");
function addTask(){
    const input = document.querySelector("input").value;
    if(input===''){
        alert("You have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    
    }
    document.querySelector("input").value="";
    saveData();
}
listCont.addEventListener("click",(e)=>{
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
btn.addEventListener("click",()=>{
    addTask();
})
document.querySelector("input").addEventListener("keydown",(event)=>{
    if(event==="enter"||event.keyCode===13){
        addTask();
    }
})
function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}
function showTask(){
    listCont.innerHTML=localStorage.getItem("data");
}
showTask();


















