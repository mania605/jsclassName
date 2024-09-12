const btnToggle = document.querySelector(".btnToggle");
const [topEL, middleEL, bottomEl] = btnToggle.querySelectorAll("div");

btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("on");
})