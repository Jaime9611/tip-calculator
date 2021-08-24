import { calculateValues } from "..";
// Number Inputs
const bill_input = document.querySelector("#bill-value");

let bill_value = 0;

bill_input.addEventListener("input", () => {
  let price = parseFloat(bill_input.value);
  if (typeof price === "number") {
    bill_value = price;
    calculateValues();
  }
});

const reset_bill = () => {
  bill_input.value = "";
  bill_value = 0;
};

export { bill_value, bill_input, reset_bill };
