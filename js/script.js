let cross = document.getElementById("cross")
let plan = document.getElementById("plan")
let details = document.querySelectorAll("#prod1")
let usdp = document.getElementById("user_drop");
let userDetails = document.getElementById("user_details")


cross.addEventListener('click', ()=>{
    plan.style.display="none"
})

details.forEach((detailTag)=>{
    detailTag.addEventListener('click', ()=>{
        details.forEach(detail=>{
            if(detail != detailTag){
                detail.removeAttribute("open")
            }
        })
    })
})


userDetails.addEventListener("click", ()=>{
    usdp.style.display = "flex";

    if(usdp.style.display == "flex"){
        userDetails.addEventListener('click', ()=>{
            usdp.style.display = "none";
             
            if(usdp.style.display == "none"){
                userDetails.addEventListener('click', ()=>{
                usdp.style.display = "flex";
                })
            }
            else{
                usdp.style.display = "none";
            }
        })
    }
     
    
})

