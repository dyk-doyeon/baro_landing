
(() => {
  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn");

  function openTabletNav() {
    navTabletContent.style.display = "block";
    originalNav.style.display = "none";
  }

  function closeTabletNav() {
    navTabletContent.style.display = "none";
    originalNav.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
