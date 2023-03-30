
(() => {
  const reviewBtn = document.querySelector("#review_btn"),
        prosBtn = document.querySelector("#pros_btn"),
        reviewContent = document.querySelector(".review__container"),
        prosContent = document.querySelector(".pros__container"),
        marginTop = document.querySelector(".marginTop");

  function showPros() {
    reviewBtn.style.backgroundColor = "#AB7D72";
    prosBtn.style.backgroundColor = "#A14631";
    reviewContent.style.display = "none";
    prosContent.style.display = "block";
    marginTop.style.marginTop = "200px";
  };

  function showReivew() {
    reviewBtn.style.backgroundColor = "#A14631";
    prosBtn.style.backgroundColor = "#AB7D72";
    reviewContent.style.display = "block";
    prosContent.style.display = "none";
    marginTop.style.marginTop = "0px";
  }


  prosBtn.addEventListener("click", showPros);
  reviewBtn.addEventListener("click", showReivew);

  const openButton = document.querySelector(".openBtn"),
        navTabletContent = document.querySelector("#navbar__tablet"),
        closeButton = document.querySelector(".closeBtn"),
        originalNav = document.querySelector(".navBtn");

  function openTabletNav() {
    navTabletContent.classList.add("open");
    originalNav.style.display = "none";
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function closeTabletNav() {
    navTabletContent.classList.remove("open");
    originalNav.style.display = "block";
  }
  
  openButton.addEventListener("click", openTabletNav);
  closeButton.addEventListener("click", closeTabletNav);
})()
