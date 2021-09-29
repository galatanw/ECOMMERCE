const img = document.getElementById("searchLogo")
img.onclick=()=>{
    const search=document.getElementById("search")
    search.style.display="block"
}
const text= document.getElementsByClassName("boxText")
const box=document.getElementsByClassName("categoriesBox")

    box[0].onmouseover=()=>{
        text[0].style.display="block"
    }
    box[0].onmouseout=()=>{
        text[0].style.display="none"
    }
    box[1].onmouseover=()=>{
        text[1].style.display="block"
    }
    box[1].onmouseout=()=>{
        text[1].style.display="none"
    }
        box[2].onmouseover=()=>{
        text[2].style.display="block"
    }
    box[2].onmouseout=()=>{
        text[2].style.display="none"
    }
        box[3].onmouseover=()=>{
        text[3].style.display="block"
    }
    box[3].onmouseout=()=>{
        text[3].style.display="none"
    }