// function openFunction(){
//     document.getElementById("menu").style.width="300px";
//     document.getElementById("mainbox").style.visibility="hidden";
//     // document.getElementById("menu").style.visibility="visible";
// }

// function closeFunction(){
//     document.getElementById("menu").style.width="0px"; 
//     document.getElementById("mainbox").style.visibility="visible";
// }

// ******* NAVBAR HIDE ******************
let lastScrollTop = 0; 

let navbar = document.getElementById('navbar');

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top = "-60px";
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop; 
})
// ************************************

