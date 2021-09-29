const cartTable=document.getElementById("CART")
let sum=0
const priceDisplay=document.getElementById("sum")
const cartRow=document.getElementsByClassName("cartRow")
    for (let i = 0; i < cart.length; i++) {
       sum+=cart[i].price
        cartTable.innerHTML+=
    `<tr class="cartRow">
    <td><img src="${cart[i].img}"><br>${cart[i].description}</td>
    <td><h1 class=priceTerra style:color:"red">${cart[i].price} USD</h1></td>
    <td><h1 class=priceTerra style:color:"red">${cart[i].aftersale()} USD</h1></td>
    <td><button onClick="remove(${i})"><h1 >-</h1></button></td>
    </tr>`
    }
    priceDisplay.innerText=sum


function remove(i) {
    sum-=cart[i].price
    cart.splice(i,0)
    cartRow[i].innerHTML=""
    priceDisplay.innerText=sum
}