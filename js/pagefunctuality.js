let page=products[0].section
const cartClose=document.getElementById("cartClose")
const infoBtn = document.getElementsByClassName("infoBtn")
const cartListBtn=document.getElementById("cartLogo")
const cartTable=document.getElementById("cartTable")
const cartList=document.getElementById("cartContainer")     
const productDiv=document.getElementsByClassName("productContainer")
const textInfo=document.getElementsByClassName("productInfo")
const infoBtnText=document.getElementsByClassName("infoBtnText")
const FIRST=document.getElementById("first")
const SECOND=document.getElementById("second")
const THIRD=document.getElementById("third")
let clickedCounter=0;
let cartCounter=0
    let a=[]
    function clicked(containerNumber) {
    if(clickedCounter==0){
        infoBtnText[containerNumber].innerText =`See less`
        productDiv[containerNumber].style.overflowY="scroll"
        productDiv[containerNumber].style.height="auto"
        clickedCounter++
        return
      }
      infoBtnText[containerNumber].innerText=`read More`
      productDiv[containerNumber].style.overflowY="hidden"
      productDiv[containerNumber].style.height="20vh"


      clickedCounter=0

}

function CART_LIST() {
    if(cartCounter==0){
        cartList.style.display='block'
        cartCounter++
        return
    }
    cartList.style.display='none'
    cartCounter=0
}
cartListBtn.onclick=()=>{CART_LIST()}
cartClose.onclick=()=>{CART_LIST()}

function createSection (model,i,CONTAINER,firstImg,secondImg,thirdImg,fourImg,title,color,weight,VARONE,VARTWO,insurance,price,sale,aftersale){
    let ab;
    let bb;   
    switch(model){
        case "computersAndMore":
        ab="battery"
        bb="PROCESSOR"
        break
        case "kitchen":
            ab="department"
            bb="metirial"
            case "home":
                ab="aaa"
                bb="bbb"
                break
            case "bathroom":
                ab="aaa"
                bb="bbb"        
                break
        default:break
    }
    CONTAINER.innerHTML+=` <div class="productContainer">
    <h3 class="productTitle">${title}"</h3 >
    <button class="infoBtn" onClick=clicked(${i})><p class="infoBtnText" style="text-decoration: underline; color: grey;  ">read more</p></button>
    <button class="cartAdd" onClick=ADD(${i}) style="background-color:blueviolet; border-radius: 10%;"><p class="Cart" style="font-weight: 500; color: orange;  ">Cart+</p></button>
    <button class="wishAdd" onClick=WISHLIST(${i}) style="background-color:blueviolet; border-radius: 10%;"><p class="Cart" style="font-weight: 500; color: orange;  ">WISH+</p></button>
    <img src="${firstImg}" class="productImgMain" id="mainImg">
     <img src="${firstImg}" class="productImg" id="mainProductImg${i}">
     <img src="${secondImg}" class="productImg" id="firstProductImg${i}">
     <img src="${thirdImg}" class="productImg" id="secondProductImg${i}">
     <img src="${fourImg}" class="productImg" id="thirdProductImg${i}">
    <p class="productInfo">
          <span> COLOR-</span>${color}<br><br>
            <span>WEIGHT-</span>${weight}<br><br>
            <span>${ab}-</span>${VARONE}<br><br>
            <span>${bb}-</span> ${VARTWO}<br><br>
            <span>INSURANCE-</span>${insurance}<br><br>
            <span>PRICE-</span><span class="price">${price} </span><span class="salePres">${sale}%OFF  <span class="saledPriced">${aftersale}</span<br><br>
         </p>
         <img src="${firstImg}"   onClick=mainImageSwitch(${i}) class="smallProductImg ">
         <img src="${secondImg}"   onClick=firstImageSwitch(${i}) class="smallProductImg ">
         <img src="${thirdImg}"   onClick=secondImageSwitch(${i}) class="smallProductImg ">
         <img src="${fourImg}"   onClick=thirdImageSwitch(${i}) class="smallProductImg " ">++
         </div>
    `
}

function mainImageSwitch(i){
    const ProductSwitch=document.getElementById(`mainProductImg${i}`)
    const hide=document.getElementById(`secondProductImg${i}`)
    const hideSec=document.getElementById(`thirdProductImg${i}`)
    const hideThird=document.getElementById(`firstProductImg${i}`)
    hideThird.style.zIndex=`-1`
    hideSec.style.zIndex=`-1`
    hide.style.zIndex=`-1`
    ProductSwitch.style.zIndex=`4`
}   
function firstImageSwitch(i){
const ProductSwitch=document.getElementById(`firstProductImg${i}`)
const hide=document.getElementById(`secondProductImg${i}`)
const hideSec=document.getElementById(`thirdProductImg${i}`)
const hideThird=document.getElementById(`mainProductImg${i}`)
hideThird.style.zIndex=`-1`
hideSec.style.zIndex=`-1`
hide.style.zIndex=`-1`
ProductSwitch.style.zIndex=`4`
}
function secondImageSwitch(i){
const ProductSwitch=document.getElementById(`secondProductImg${i}`)
const hide=document.getElementById(`firstProductImg${i}`)
const hideSec=document.getElementById(`thirdProductImg${i}`)
const hideThird=document.getElementById(`mainProductImg${i}`)
hideThird.style.zIndex=`-1`
hideSec.style.zIndex=`-1`
hide.style.zIndex=`-1`
ProductSwitch.style.zIndex=`4`
}
function thirdImageSwitch(i){
const ProductSwitch=document.getElementById(`thirdProductImg${i}`)
const hide=document.getElementById(`firstProductImg${i}`)
const hideSec=document.getElementById(`secondProductImg${i}`)
const hideThird=document.getElementById(`mainProductImg${i}`)
hideThird.style.zIndex=`-1`
hideSec.style.zIndex=`-1`
hide.style.zIndex=`-1`
ProductSwitch.style.zIndex=`4`
}


for (let i = 0;  i<products.length; i++) {
switch(products[i].box){
    case 1:
        createSection(page,i,FIRST,products[i].img,products[i].secondImg,products[i].thirdImg,products[i].fourImg,products[i].description,products[i].color,products[i].WEIGHT,products[i].one,products[i].two,products[i].INSURANCE,products[i].price,products[i].sale,products[i].aftersale())
        break
    case 2:
        createSection(page,i,SECOND,products[i].img,products[i].secondImg,products[i].thirdImg,products[i].fourImg,products[i].description,products[i].color,products[i].WEIGHT,products[i].one,products[i].two,products[i].INSURANCE,products[i].price,products[i].sale,products[i].aftersale())
        break
    case 3:
        createSection(page,i,THIRD,products[i].img,products[i].secondImg,products[i].thirdImg,products[i].fourImg,products[i].description,products[i].color,products[i].WEIGHT,products[i].one,products[i].two,products[i].INSURANCE,products[i].price,products[i].sale,products[i].aftersale())


    }
}
