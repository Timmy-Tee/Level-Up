let cross = document.getElementById("cross")
let plan = document.getElementById("plan")
let details = document.querySelectorAll("#prod1")
// User Info drop down
let usdp = document.getElementById("user_drop");
let userDetails = document.getElementById("user_details")

// Bell
let userBellIcon = document.getElementById('bell')
let usersNotification = document.getElementById('notification')

let a = 0;   

let flex = "flex";
let none = "none";



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


userDetails.addEventListener('click', ()=>{
    a += 1
    if((a % 2) == 1){
        usdp.style.display = flex;
    }
    else if((a % 2) == 0){
        usdp.style.display = none;
    }
})

console.log(a)

userBellIcon.addEventListener('click', ()=>{
    a += 1 
    if((a % 2) == 1){
        usersNotification.style.display = flex;
    }
    else if((a % 2) == 0){
        usersNotification.style.display = none;
    }
})





