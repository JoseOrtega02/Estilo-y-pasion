const btn = document.querySelector(".btn");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    btn.innerHTML = `<img
    src="../img/iconos/298879_bars_three_icon.svg"
    alt=""
    class="fill-primary w-8 h-8"
  />
`;
  } else {
    console.log("black");
    btn.innerHTML = `<img
    src="../img/iconos/9110796_x_icon.svg"
    alt=""
    class="fill-primary w-8 h-8"
  />
`;
  }
});
