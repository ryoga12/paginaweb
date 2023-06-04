let caja=document.getElementById("subir-arriba");
caja.addEventListener("click", function(){
    console.log("correcto")
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
        
    }else{
        caja.style.display="none"

    }
})