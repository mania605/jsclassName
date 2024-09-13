const btnToggle = document.querySelector(".btnToggle");
const mibilePanel = document.querySelector('.mobilePanel');

btnToggle.addEventListener("click", () => {
  //  btnToggle.classList.toggle("on");
  //  mobilePanel.classList.toggle("on");
  [btnToggle, mobilePanel], forEach(el => el.classList.toggle('on'));
});
