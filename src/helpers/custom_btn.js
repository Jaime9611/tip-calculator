// Custom Button and input
const custom_tip = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");

const hide_btn = (e) => {
  custom_tip.classList.add("input-hide");
};

const show_input = (e) => {
  custom_tip_input.classList.remove("input-hide");
};

const add_custom_btn_events = () => {
  custom_tip.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("input-hide")) {
      hide_btn();
      show_input();
    }
  });
};

export default add_custom_btn_events;
