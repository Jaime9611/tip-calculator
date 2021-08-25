import { calculateValues } from "..";
import { custom_tip_input, show_btn } from "./custom_btn";

// Tip buttons
const tip_radio_inputs = document.querySelectorAll("input[type='radio']");

let percentage = 0;

tip_radio_inputs.forEach((input) => {
  input.addEventListener("change", (option) => {
    if (option.target.checked) {
      percentage = parseInt(option.target.value);
    }
    show_btn();
    calculateValues();
  });
});

const get_percentage = () => percentage / 100;

const set_percentage = (value) => (percentage = value);

const reset_percentage = () => {
  tip_radio_inputs.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
  percentage = 0;
};

export { get_percentage, tip_radio_inputs, set_percentage, reset_percentage };
