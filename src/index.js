import "./styles/main.scss";

// Number Inputs
const bill_value = document.querySelector("#bill-value");
const persons_input = document.querySelector("#persons");

// Tip buttons
const tip_buttons = document.querySelectorAll(".btn-tip");
const tip_radio_inputs = document.querySelectorAll("input[type='radio']");

// Custom Button and input
const custom_tip = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");

// Variables
let bill = 0;
let percentage = 0;
let persons = 0;

const hide_btn = (e) => {
  custom_tip.classList.add("input-hide");
};

const show_input = (e) => {
  custom_tip_input.classList.remove("input-hide");
};

const makeCheck = (id) => {
  const option = document.querySelector(`#${id}`);
  option.checked = true;
};

const isChecked = (option) => {
  tip_radio_inputs.forEach((input) => {
    if (input.checked) {
      percentage = parseInt(input.value);
    }
  });
  console.log(percentage);
};

bill_value.addEventListener("input", () => {
  let price = parseFloat(bill_value.value);
  if (typeof price === "number") {
    bill = price;
  }
  console.log(bill);
});

tip_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    makeCheck(e.target.htmlFor);
    isChecked();
  });
});

tip_radio_inputs.forEach((input) => {
  input.addEventListener("change", (e) => isChecked(e.target));
});

custom_tip.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("input-hide")) {
    hide_btn();
    show_input();
  }
});

custom_tip.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("input-hide")) {
    hide_btn();
    show_input();
  }
});
