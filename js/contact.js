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
        name: '',
        phone: '',
        email: '',
        date: '',
        content: ''
      }
    },

    methods: {
      tryLogIn() {
        if(this.name.trim().length == 0) {
          console.log('name is empty, mark the field and let the user know');
          this.$refs['name'].classList.add('missing-field');
          return;
        } else if (this.phone.trim().length == 0) {
          console.log('phone number is empty, mark the field and let the user know');
          this.$refs['phone'].classList.add('missing-field');
          return;
        } else if (this.email.trim().length == 0) {
          console.log('email is empty, mark the field and let the user know');
          this.$refs['email'].classList.add('missing-field');
          return;
        } else if (this.date.trim().length == 0) {
          console.log('date number is empty, mark the field and let the user know');
          this.$refs['date'].classList.add('missing-field');
          return;
        } else if (this.content.trim().length > 0) {
          console.log('content is empty, mark the field and let the user know');
          this.$refs['content'].classList.add('missing-field');
          return;
        } else if(this.name.trim().length > 0) {
          this.$refs['username'].classList.remove('missing-field');
          return;
        } else if (this.phone.trim().length > 0) {
          this.$refs['phone'].classList.remove('missing-field');
          return;
        } else if (this.email.trim().length > 0) {
          this.$refs['email'].classList.remove('missing-field');
          return;
        } else if (this.date.trim().length > 0) {
          this.$refs['date'].classList.remove('missing-field');
          return;
        } else if (this.content.trim().length > 0) {
          this.$refs['content'].classList.remove('missing-field');
          return;
        }
      }
    }
  }).mount('#app')
})()
