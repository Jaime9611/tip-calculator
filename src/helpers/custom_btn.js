import { calculateValues } from "..";
import { set_percentage, reset_percentage } from "./percentage_fields";

// Custom Button and input
const custom_btn = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");
const inputError = document.querySelector("#tcustom + .input-error--tips");

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
  if (custom_tip_input.validity.valid) {
    inputError.innerHTML = "";
    inputError.className = "input-error";
    let value = parseInt(custom_tip_input.value);
    set_percentage(value);
  } else {
    showError();
    set_percentage(0);
  }
  calculateValues();
});

const reset_custom_input = () => {
  show_btn();
};

const showError = () => {
  if (custom_tip_input.validity.badInput) {
    inputError.textContent = "Must be a number";
  } else if (custom_tip_input.validity.rangeUnderflow) {
    if (custom_tip_input.value === "0") {
      inputError.textContent = "Can´t be zero";
    } else {
      inputError.textContent = "Can´t negative";
    }
  } else if (custom_tip_input.validity.stepMismatch) {
    inputError.className = "input-error active";
  }
  inputError.className = "input-error--tips active";
};

export { show_btn, custom_tip_input, custom_btn, reset_custom_input };
