import { calculateValues } from "..";

const persons_input = document.querySelector("#persons");

let persons = 0;

persons_input.addEventListener("input", () => {
  let cuantity = parseInt(persons_input.value);
  if (typeof cuantity === "number") {
    persons = cuantity;
    calculateValues();
  }
});

const reset_persons = () => {
  persons_input.value = "";
  persons = 0;
};

export { persons, persons_input, reset_persons };
