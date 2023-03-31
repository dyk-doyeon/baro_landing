import { SendMail } from "./components/mailer.js";


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




  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Hello"
      }
    },

    methods: {
      processMailSuccess(result) {
        let successText = document.querySelector(".success__text");

        successText.classList.add("show");

        setTimeout(function() {
          successText.classList.remove("show");
        }, 5000);
      },

      processMailFailure(result) {
        let errorText = document.querySelector(".error__text");

        errorText.classList.add("show");

        setTimeout(function() {
          errorText.classList.remove("show");
        }, 5000);
      },

      processMail(event) {        
        // use the SendMail component to process mail
        SendMail(this.$el.parentNode)
          .then(data => this.processMailSuccess(data))
          .catch(err => this.processMailFailure(err));
        },
      }
    }).mount('#mail-form')
})();