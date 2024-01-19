var btnplus = document.getElementsByClassName("plus-btn");
var btnminus = document.getElementsByClassName("minus-btn");
var total = document.getElementsByClassName("ptotal");
var totalitem = document.getElementById("totalitem");
var quantityitem = document.getElementsByClassName("quantityitem");
var price = document.getElementsByClassName("total-price");
var heart=document.getElementsByClassName("fa-solid");
var x=document.getElementsByClassName("x");
console.log(x)
var carditem=document.getElementsByClassName("item");
 console.log(carditem)
var sumtotal = 0;

for (let i = 0; i < btnplus.length; i++) {
  let count = parseInt(quantityitem[i].innerHTML);

  btnplus[i].addEventListener("click", function () {
    count++;
    quantityitem[i].innerHTML = count.toString(); // Convert count to string
    let sum = parseInt(price[i].innerHTML) * count;
    total[i].innerHTML = sum.toString(); // Convert sum to string
    calculateTotal();
  });

  btnminus[i].addEventListener("click", function () {
    if (count > 0) {
      count--;
      quantityitem[i].innerHTML = count.toString(); // Convert count to string
      let sum = parseInt(price[i].innerHTML) * count;
      total[i].innerHTML = sum; // Convert sum to string
      calculateTotal();
    }
  });
  heart[i].addEventListener("click",function(){
    if(heart[i].style.color=="red"){
      heart[i].style.color="white"
      console.log("huzhh")
    }
    else{
      heart[i].style.color="red"
    }
  })

  x[i].addEventListener("click",function(){
    carditem[i].remove()
  })
}

function calculateTotal() {
  sumtotal = 0;
  for (let i = 0; i < total.length; i++) {
    sumtotal += parseInt(total[i].innerHTML);
  }

  if (totalitem !== null) {
    totalitem.innerHTML = sumtotal.toString(); // Convert sumtotal to string
 
  }
}
