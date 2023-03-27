
(() => {
  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn"),
        mainText = document.querySelector(".notshowing");

  function openTabletNav() {
    navTabletContent.style.display = "block";
    originalNav.style.display = "none";
    window.scrollTo({top: 0, behavior: 'smooth'});
    mainText.style.display = "none";
  }

  function closeTabletNav() {
    navTabletContent.style.display = "none";
    originalNav.style.display = "block";
    mainText.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
