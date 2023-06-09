
(() => {
  const pickupBtn = document.querySelector("#pickup_btn"),
        cleanBtn = document.querySelector("#clean_btn"),
        pickupContent = document.querySelector(".pickup__container"),
        cleanContent = document.querySelector(".clean__container"),
        marginTop = document.querySelector(".marginTop");

  function showclean() {
    pickupBtn.style.backgroundColor = "#AB7D72";
    cleanBtn.style.backgroundColor = "#A14631";
    pickupContent.style.display = "none";
    cleanContent.style.display = "block";
    marginTop.style.marginTop = "200px";
  };

  function showpickup() {
    pickupBtn.style.backgroundColor = "#A14631";
    cleanBtn.style.backgroundColor = "#AB7D72";
    pickupContent.style.display = "block";
    cleanContent.style.display = "none";
    marginTop.style.marginTop = "0px";
  }


  cleanBtn.addEventListener("click", showclean);
  pickupBtn.addEventListener("click", showpickup);

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
