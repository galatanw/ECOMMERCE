let LoggedIn;
let activeUser=0
const login=document.getElementById("wishlist")
const wishlist=document.getElementById("wishlistContainer")
const wishlistTable =document.getElementById("wishlistTable")
let wishlistCartCounter=0
function wishlistDisplay() {
    if(wishlistCartCounter==0){
        wishlist.style.display='block'
        wishlistCartCounter++
        return
    }
    wishlist.style.display='none'
    wishlistCartCounter=0
}
function WISHLIST (i){
    for (let x = 0; x < users[activeUser].WISHLIST.length; x++) {
    if (users[activeUser].WISHLIST[x].description==products[i].description){return}
    }
    users[0].WISHLIST.push(products[i])    
    b=users[activeUser].WISHLIST.length
   wishlistTable.innerHTML+=
    `<tr>
    <td><img src="${users[activeUser].WISHLIST[b-1].img}"><br>${users[activeUser].WISHLIST[b-1].description}</td>
    <td><h1 class=priceTerra style:color:"red">${users[activeUser].WISHLIST[b-1].price} USD</h1></td>
    <td><h1 class=priceTerra style:color:"red">${users[activeUser].WISHLIST[b-1].aftersale()} USD</h1></td>
    </tr>`
}