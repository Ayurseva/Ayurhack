const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});

var typed=new Typed(".auto-type",{
    strings:["AYURVEDA", "YOGA","UNANI","SIDDA","HOMEOPATHY"],
    typeSpeed:120,
    backSpeed:80,
    loop:true,
})