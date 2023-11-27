let cross = document.getElementById("cross")
let plan = document.getElementById("plan")

cross.addEventListener('click', ()=>{
    plan.style.display="none"
})

let details = document.querySelectorAll("#prod1")

details.forEach((detailTag)=>{
    detailTag.addEventListener('click', ()=>{
        details.forEach(detail=>{
            if(detail != detailTag){
                detail.removeAttribute("open")
            }
        })
    })
})


// User Info drop down
let usdp = document.getElementById("user_drop");
let userDetails = document.getElementById("user_details")

// Bell
let userBellIcon = document.getElementById('bell')
let usersNotification = document.getElementById('notification')

let a = 0;   

let flex = "flex";
let none = "none";

userDetails.addEventListener('click', ()=>{
    a += 1
    if((a % 2) == 1){
        usdp.style.display = flex;
    }
    else if((a % 2) == 0){
        usdp.style.display = none;
    }
})


userBellIcon.addEventListener('click', ()=>{
    a += 1 
    if((a % 2) == 1){
        usersNotification.style.display = flex;
    }
    else if((a % 2) == 0){
        usersNotification.style.display = none;
    }
})


// Checkbox
function mychecked(){
    let circles = document.querySelectorAll("#circle");
    let skill_bar = document.querySelector("#skill_bar")
    let checkListProgressInterval = 100 / circles.length;
    let width = 0;
    let count = 0;
    let success_count = document.getElementById("js_count")

    for(let i = 0; i < circles.length; i++){
        if(circles[i].checked){
            width += checkListProgressInterval;
            count += 1;

            if(count < details.length){
                details[(count)].setAttribute('open', 'open');
                console.log(count, i+2)
                if(count > 1 && count > i){

                    details[(i)].removeAttribute('open');
                }

            }
        }
    }
    success_count.innerHTML = count
    skill_bar.style.width = `${width}%`;

}




