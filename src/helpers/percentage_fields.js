import { custom_tip_input } from "./custom_btn";

// Tip buttons
const tip_radio_inputs = document.querySelectorAll("input[type='radio']");

let percentage = 0;

tip_radio_inputs.forEach((input) => {
  input.addEventListener("change", (option) => {
    if (option.target.checked) {
      percentage = parseInt(option.target.value);
    }
  });
});

custom_tip_input.addEventListener("input", () => {
  let value = parseInt(custom_tip_input.value);
  if (typeof value !== NaN) {
    percentage = value;
  }
});

const get_percentage = () => percentage / 100;
const reset_percentage = () => (percentage = 0);

export { get_percentage, tip_radio_inputs, reset_percentage };
