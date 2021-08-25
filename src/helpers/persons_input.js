import { calculateValues } from "..";

const persons_input = document.querySelector("#persons");
const inputError = document.querySelector("#persons + .input-error");

let persons = 0;

persons_input.addEventListener("input", () => {
  if (persons_input.validity.valid) {
    inputError.innerHTML = "";
    inputError.className = "input-error";
    persons = parseInt(persons_input.value);
  } else {
    showError();
    persons = 0;
  }
  calculateValues();
});

const reset_persons = () => {
  persons_input.value = "";
  persons = 0;
};

const showError = () => {
  if (persons_input.validity.badInput) {
    inputError.textContent = "Value must be a number.";
  } else if (persons_input.validity.rangeUnderflow) {
    if (persons_input.value === "0") {
      inputError.textContent = "Can´t be zero";
    } else {
      inputError.textContent = "Can´t negative";
    }
  } else if (persons_input.validity.stepMismatch) {
    inputError.textContent = "Value must be an integer";
  }
  inputError.className = "input-error active";
};

export { persons, persons_input, reset_persons };
