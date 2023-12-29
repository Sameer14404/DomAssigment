let btn=document.getElementById("search-button");
let moviename=document.getElementById("movie");
let container=document.getElementById("cont");
let api="https://www.omdbapi.com/?i=tt3896198"
let apikey="&apikey=a380102e"

btn.addEventListener("click",()=>{
    let sn=moviename.value
    fetch(`${api}${apikey}&t=${sn}`).then(res=>res.json).then(data=>display(data))
})

function display(data){
    data.array.forEach(element => {
        let img = document.createElement("img");
        img.src = element.avatar;
        
        let name = document.createElement("h3");
        name.innerText = element.title;
  
        let rating = document.createElement("p"); 
        email.innerText = element.rating;
  
        container.append(img, name, rating);
    });
}