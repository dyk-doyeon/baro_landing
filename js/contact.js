
(() => {
  const contactBtn = document.querySelector(".contactBtn");


  function changeBg() {
    contactBtn.classList.add("btnAnimation");
    setTimeout(function(){
      contactBtn.classList.remove("btnAnimation");
    }, 4000);

  };

  contactBtn.addEventListener("click", changeBg);


  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn");

  function openTabletNav() {
    navTabletContent.style.display = "block";
    originalNav.style.display = "none";
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function closeTabletNav() {
    navTabletContent.style.display = "none";
    originalNav.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
