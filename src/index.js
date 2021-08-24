import "./styles/main.scss";
import { bill_value, bill_input } from "./helpers/bill_input";
import { persons, persons_input } from "./helpers/persons_input";
import { get_percentage, tip_radio_inputs } from "./helpers/percentage_fields";

const tip_total = document.querySelector("#tip-total");
const bill_total = document.querySelector("#bill-total");

const calculateValues = () => {
  if (persons && bill_value && get_percentage()) {
    let tip_per_person = (bill_value * get_percentage()) / persons;
    let total_bill = bill_value + bill_value * get_percentage();
    let total_per_person = total_bill / persons;
    console.log(total_bill);

    tip_total.innerText = `${Math.floor(tip_per_person * 100) / 100}`;
    bill_total.innerText = `${Math.ceil(total_per_person * 100) / 100}`;
  }
};

persons_input.addEventListener("input", () => {
  calculateValues();
});

bill_input.addEventListener("input", () => {
  calculateValues();
});

tip_radio_inputs.forEach((input) => {
  input.addEventListener("change", () => {
    calculateValues();
  });
});
