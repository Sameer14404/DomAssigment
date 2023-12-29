let container=document.getElementById("container");
let fetch_btn=document.getElementById("btn")

  function display(ans) {
    ans.data.forEach(element => {
      let img = document.createElement("img");
      img.src = element.avatar;
      
      let name = document.createElement("h3");
      name.innerText = element.first_name + " " + element.last_name;

      let email = document.createElement("p"); 
      email.innerText = element.email;

      container.append(img, name, email);
    });
  }
fetch_btn.addEventListener("click", () => {
   
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(ans => display(ans));
  
  });

 
