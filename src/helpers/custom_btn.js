import {
  tip_radio_inputs,
  reset_percentage,
  get_percentage,
} from "./percentage_fields";

// Custom Button and input
const custom_btn = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");

const hide_btn = () => {
  if (!custom_btn.classList.contains("input-hide")) {
    reset_percentage();
    custom_btn.classList.add("input-hide");
    tip_radio_inputs.forEach((input) => {
      if (input.checked) {
        input.checked = false;
      }
    });
    show_input();
  }
};

const show_input = () => {
  custom_tip_input.classList.remove("input-hide");
};

const show_btn = () => {
  if (!custom_tip_input.classList.contains("input-hide")) {
    custom_tip_input.classList.add("input-hide");
  }
  if (custom_btn.classList.contains("input-hide"))
    custom_btn.classList.remove("input-hide");
};

custom_btn.addEventListener("click", (e) => {
  e.preventDefault();
  hide_btn();
});

export { show_btn, custom_tip_input, custom_btn };
