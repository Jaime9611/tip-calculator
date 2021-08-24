import { calculateValues } from "..";
import { set_percentage, reset_percentage } from "./percentage_fields";

// Custom Button and input
const custom_btn = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");

const hide_btn = () => {
  if (!custom_btn.classList.contains("input-hide")) {
    reset_percentage();
    calculateValues();
    custom_btn.classList.add("input-hide");
    show_input();
  }
};

const show_input = () => {
  custom_tip_input.classList.remove("input-hide");
  custom_tip_input.focus();
};

const show_btn = () => {
  if (!custom_tip_input.classList.contains("input-hide")) {
    custom_tip_input.classList.add("input-hide");
    custom_tip_input.value = "";
  }
  if (custom_btn.classList.contains("input-hide"))
    custom_btn.classList.remove("input-hide");
};

custom_btn.addEventListener("click", (e) => {
  e.preventDefault();
  hide_btn();
});

custom_tip_input.addEventListener("input", () => {
  let value = parseInt(custom_tip_input.value);
  if (value !== NaN) {
    set_percentage(value);
    calculateValues();
  }
});

const reset_custom_input = () => {
  show_btn();
};

export { show_btn, custom_tip_input, custom_btn, reset_custom_input };
