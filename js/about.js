
(() => {
  const beforeBtn = document.querySelector("#before_btn"),
        afterBtn = document.querySelector("#after_btn"),
        beforeContent = document.querySelector(".service__before"),
        afterContent = document.querySelector(".service__after");

  function showAfter() {
    beforeBtn.style.backgroundColor = "#AB7D72";
    afterBtn.style.backgroundColor = "#A14631";
    beforeContent.style.display = "none";
    afterContent.style.display = "block";
  };

  function showBefore() {
    beforeBtn.style.backgroundColor = "#A14631";
    afterBtn.style.backgroundColor = "#AB7D72";
    beforeContent.style.display = "flex";
    afterContent.style.display = "none";
  }


  afterBtn.addEventListener("click", showAfter);
  beforeBtn.addEventListener("click", showBefore);

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
