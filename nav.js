const menuBtn = document.getElementById("nav-menu-btn");
const menuCncl = document.getElementById("nav-menu-cncl");
const navMenu = document.getElementById("nav-menu");

navMenu.style.opacity = "0";
menuBtn.addEventListener("click", () => {
  if (navMenu.style.opacity === "1"){
    navMenu.style.opacity = "0";
  } else {
    navMenu.style.opacity = "1";
  }
});


menuBtn.addEventListener("click",()=>{
  menuBtn.style.display = "none";
  menuCncl.style.display = "block";
});

menuCncl.addEventListener("click",()=> {
  menuCncl.style.display = "none";
  menuBtn.style.display = "block";
  navMenu.style.opacity = "0";
});
