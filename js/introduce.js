
(() => {
  const limBtn = document.querySelector("#lim_btn"),
        parkBtn = document.querySelector("#park_btn"),
        limContent = document.querySelector(".lim__container"),
        parkContent = document.querySelector(".park__container");

  function showpark() {
    limBtn.style.backgroundColor = "#AB7D72";
    parkBtn.style.backgroundColor = "#A14631";
    limContent.style.display = "none";
    parkContent.style.display = "block";
  };

  function showlim() {
    limBtn.style.backgroundColor = "#A14631";
    parkBtn.style.backgroundColor = "#AB7D72";
    limContent.style.display = "block";
    parkContent.style.display = "none";
  }


  parkBtn.addEventListener("click", showpark);
  limBtn.addEventListener("click", showlim);

  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn"),
        transBox = document.querySelector(".transBox");

  function openTabletNav() {
    navTabletContent.classList.add("open");
    originalNav.style.display = "none";
    window.scrollTo({top: 0, behavior: 'smooth'});
    transBox.style.display = "none";
  }

  function closeTabletNav() {
    navTabletContent.classList.remove("open");
    originalNav.style.display = "block";
    transBox.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
