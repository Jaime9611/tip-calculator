import "./styles/main.scss";
import { bill_value, bill_input, reset_bill } from "./helpers/bill_input";
import { persons, persons_input, reset_persons } from "./helpers/persons_input";
import {
  get_percentage,
  reset_percentage,
  tip_radio_inputs,
} from "./helpers/percentage_fields";
import {
  custom_btn,
  custom_tip_input,
  reset_custom_input,
  show_btn,
} from "./helpers/custom_btn";

const tip_total = document.querySelector("#tip-total");
const bill_total = document.querySelector("#bill-total");
const reset_btn = document.querySelector("#reset");

const calculateValues = () => {
  if (persons && bill_value && get_percentage()) {
    let tip_per_person = (bill_value * get_percentage()) / persons;
    let total_bill = bill_value + bill_value * get_percentage();
    let total_per_person = total_bill / persons;

    tip_total.innerText = `${Math.floor(tip_per_person * 100) / 100}`;
    bill_total.innerText = `${Math.ceil(total_per_person * 100) / 100}`;
  } else {
    tip_total.innerText = "0";
    bill_total.innerText = "0";
  }
};

reset_btn.addEventListener("click", (e) => {
  e.preventDefault();
  reset_bill();
  reset_persons();
  reset_percentage();
  reset_custom_input();
  calculateValues();
});

export { calculateValues };
