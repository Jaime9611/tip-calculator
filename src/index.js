import "./styles/main.scss";

// Number Inputs
const bill_value = document.querySelector("#bill-value");
const persons_input = document.querySelector("#persons");

// Custom Button and input
const custom_tip = document.querySelector("#custom-tip");
const custom_tip_input = document.querySelector("#tcustom");

const hide_btn = (e) => {
  custom_tip.classList.add("input-hide");
};

const show_input = (e) => {
  custom_tip_input.classList.remove("input-hide");
};

bill_value.addEventListener("input", () => {});

custom_tip.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("input-hide")) {
    hide_btn();
    show_input();
  }
});
