const terraContainer= document.getElementsByClassName("terraContainer")
const addByCart=document.getElementsByClassName("cartPlus")
const minusByCart=document.getElementsByClassName("cartMinus")
let terLocation;
let sum =0
let preSum=0
let cartRowCount=0
const priceTerraDom=document.getElementsByClassName("priceTerra")
const qntTerraDom=document.getElementsByClassName("qntTerra")
const saleDom = document.getElementsByClassName("finalCart") 
inCart=[]

/* -------------------------------------------adding/IF ADDED---------------------------------------------------------------*/ 
function added(containerNumber) {
    for (let i = 0; i < cart.length; i++) {
        if(cart[i][0].description==products[containerNumber].description){
            terLocation=cart[i][1].cartRow
            cart[i][1].counter+=1
            sum+=products[containerNumber].aftersale()
            preSum+=products[containerNumber].price
            priceTerraDom[terLocation+1].innerText=`${cart[terLocation][0].price*cart[terLocation][1].counter} USD`
            qntTerraDom[terLocation+1].innerText=`${cart[terLocation][1].counter} pcs`
            saleDom[0].innerText=`${preSum-sum} USD`
            saleDom[2].innerText=`${sum} USD"`
            if(sum>20000){
                saleDom[1].innerText=`0 USD`
            }
            else{
                saleDom[1].innerText=`100 USD`
            }
            return
        }        
    }
    

 }
/*--------------------------------------------------------FORMING A CART ROW----------------------------------------------------------*/
function ADD(containerNumber) {
    for (let i = 0; i < inCart.length; i++) {
        if(inCart[i]==containerNumber){return}
    }
    cart.push([products[containerNumber],{cartRow:cartRowCount,counter:1 ,terra:containerNumber}])    
    cartTable.innerHTML+=`<tr class=terraContainer >
    <td><img src="${products[containerNumber].img}"><br>${products[containerNumber].description}</td>
    <td><h5 class=qntTerra>1 pcs</h5></td> 
    <td><h1 class=priceTerra style:color:"red">${products[containerNumber].price} USD</h1>
    <th style="border: none; "><button  class="cartPlus" onClick=added(${containerNumber})><h1>+</h1></th>
    <th style="border: none;"><button  class="cartMinus" onClick=remove(${cartRowCount})><h1>-</h1></th>
    `
    sum+=products[containerNumber].aftersale()
    preSum+=products[containerNumber].price
    saleDom[0].innerText=`${preSum-sum} USD`
    saleDom[2].innerText=`${sum} USD`
    if(sum>20000){
        saleDom[1].innerText=`0 USD`
    }
    else{
        saleDom[1].innerText=`100 USD`
    }
    cartRowCount++
    inCart.push(containerNumber)
}
/*------------------------------------------REMOVING AND DELETING---------------------------------------------------------*/
function remove(containerNumber){
        for (let i = 0; i < products.length; i++) {
            if (cart[containerNumber][0].description==products[i].description){
                cart[containerNumber][1].counter-=1            
                sum-=cart[containerNumber][0].aftersale()
                preSum-=cart[containerNumber][0].price        
        priceTerraDom[cart[containerNumber][1].cartRow+1].innerText=`${cart[containerNumber][0].price*cart[containerNumber][1].counter} USD`
        qntTerraDom[cart[containerNumber][1].cartRow+1  ].innerText=`${cart[containerNumber][1].counter} pcs`
        saleDom[0].innerText=`${preSum-sum} USD`
        saleDom[2].innerText=`${sum} USD"`
        if(sum>20000){
        saleDom[1].innerText=`0 USD`
    }
    else{
        saleDom[1].innerText=`100 USD`
        }

    if(cart[containerNumber][1].counter<1){
        cart[containerNumber].splice(0,1,"deleted") 
       inCart.splice(containerNumber,1,"wasDeleted")
       terraContainer[cart[containerNumber][1].cartRow].style.display="none"
    }
}
}
}
   

    