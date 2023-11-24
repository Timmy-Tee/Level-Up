let cross = document.getElementById("cross")
let plan = document.getElementById("plan")
let details = document.querySelectorAll("#prod1")

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