let btn=document.getElementById("generate-number");
let number=document.getElementById("number");
let heading=document.getElementById("odd-even");
let ans;


function generateNumber() {
  // generate a random integer(hint : Math.random)
  let a= Math.floor(Math.random() * 100) + 1;
  
  number.textContent=a;
 ans= checkOddEven(a)
}

function checkOddEven(num) {
  // logic for even / odd
  if(num%2==0){
return true
  }
  else{
    return false
  }
}

window.onload = function () {
  // add event listeners to the button here
  btn.addEventListener("click",()=>{
    generateNumber()
    if(ans){
      heading.textContent="The number is even"
    }
    else{
      heading.textContent="The number is odd"
    }
  })

};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
