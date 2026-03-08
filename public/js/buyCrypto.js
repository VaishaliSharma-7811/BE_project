function calculateCost(){

let price=document.getElementById("coinSelect").value;
let qty=document.getElementById("quantity").value;

let total=price*qty;

document.getElementById("totalCost").innerText=total.toFixed(2);

}

function buyCrypto(){

let qty=document.getElementById("quantity").value;

if(qty=="" || qty<=0){
alert("Enter valid quantity");
return;
}

alert("Purchase Successful!");

}
