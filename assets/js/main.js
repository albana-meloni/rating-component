let container = document.querySelector(".rate");
let submitBtn = document.querySelector("#submit-rating");

let ratings = document.querySelectorAll(".rate-number");
ratings.forEach(rate => rate.addEventListener("click", ()=> {
  let numberSelected = rate.innerText;
  submitBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
    container.innerHTML += `
    <img src="./assets/images/illustration-thank-you.svg" alt="illustration" class="rate__img">
    <p class="rate__selected">You selected ${numberSelected} out of 5</p>
    <h3 class="rate__title text-center">Thank you!</h3>
    <p class="rate__txt text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    `;
  });
}));