import "./styles/main.scss";
import { bill_value, bill_input } from "./helpers/bill_input";
import { persons, persons_input } from "./helpers/persons_input";
import get_percentage from "./helpers/percentage_fields";

const checkValues = () => {
  if (persons && bill_value) {
    console.log("hi");
  }
};

persons_input.addEventListener("change", () => {
  checkValues();
});

bill_input.addEventListener("change", () => {
  checkValues();
});
