
(() => {
  const contactBtn = document.querySelector(".contactBtn");


  function changeBg() {
    contactBtn.classList.add("btnAnimation");
    setTimeout(function(){
      contactBtn.classList.remove("btnAnimation");
    }, 4000);

  };

  contactBtn.addEventListener("click", changeBg)
})()
