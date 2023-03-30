
(() => {
  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn"),
        footer = document.querySelector("#footer__landing"),
        mainText = document.querySelector(".notshowing");

  function openTabletNav() {
    navTabletContent.classList.add("open");
    originalNav.style.display = "none";
    window.scrollTo({top: 0, behavior: 'smooth'});
    mainText.style.display = "none";
    footer.style.display = "none";
  }

  function closeTabletNav() {
    navTabletContent.classList.remove("open");
    originalNav.style.display = "block";
    mainText.style.display = "block";
    footer.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
