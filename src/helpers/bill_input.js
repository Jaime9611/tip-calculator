import { calculateValues } from "..";
// Number Inputs
const bill_input = document.querySelector("#bill-value");
const inputError = document.querySelector("#bill-value + .input-error");

let bill_value = 0;

bill_input.addEventListener("input", () => {
  if (bill_input.validity.valid) {
    inputError.innerHTML = "";
    inputError.className = "input-error";
    bill_value = parseFloat(bill_input.value);
  } else {
    showError();
    bill_value = 0;
  }
  calculateValues();
});

const reset_bill = () => {
  bill_input.value = "";
  bill_value = 0;
};

const showError = () => {
  if (bill_input.validity.badInput) {
    inputError.textContent = "Value must be a number.";
  } else if (bill_input.validity.rangeUnderflow) {
    if (bill_input.value === "0") {
      inputError.textContent = "Can´t be zero";
    } else {
      inputError.textContent = "Can´t negative";
    }
  }
  inputError.className = "input-error active";
};

export { bill_value, bill_input, reset_bill };
