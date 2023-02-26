let btn=document.getElementById("addBtn");
let input=document.getElementById("textInput");
let list = document.getElementById("itemList");



btn.addEventListener("click",function(){
    let value=input.value;
    if (value=="") {
        alert("can not be empty");
        return

    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.style.color="red"
    span.innerHTML ="[X]";
    
    span.onclick = function () {
        this.parentElement.remove();
    };
    
       
    li.classList.add("list-group-item","hover");
    li.style.cursor="pointer";
    li.innerText=value.trim();
    li.appendChild(span);
    list.appendChild(li);
    input.value = "";
});


