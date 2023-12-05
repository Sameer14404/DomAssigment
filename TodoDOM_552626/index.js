let myForm= document.getElementById("form")
let tbody=document.querySelector("tbody")
let data=[];


myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
let formdata={
    task:myForm.task.value,
    priority:myForm.priority.value
}
data.push(formdata)
tbody.innerHTML=null;
data.forEach((element)=>{
    let tr =document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    td1.innerText=element.task;
    td2.innerText=element.priority
    tr.append(td1,td2)
    tbody.append(tr)
    })
})

