// Number Inputs
const bill_input = document.querySelector("#bill-value");

let bill_value = 0;

bill_input.addEventListener("input", () => {
  let price = parseFloat(bill_input.value);
  if (typeof price === "number") {
    bill_value = price;
  }
});

export { bill_value, bill_input };
