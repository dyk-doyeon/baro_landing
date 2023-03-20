
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
})()