import add_custom_btn_events from "./custom_btn";

// Tip buttons
const tip_radio_inputs = document.querySelectorAll("input[type='radio']");
add_custom_btn_events();

let percentage = 0;

// const makeCheck = (id) => {
//   const option = document.querySelector(`#${id}`);
//   option.checked = true;
// };

// const isChecked = () => {
//   tip_radio_inputs.forEach((input) => {
//     if (input.checked) {
//       percentage = parseInt(input.value);
//     }
//     console.log(percentage);
//   });
// };

// tip_buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     makeCheck(e.target.htmlFor);
//     isChecked();
//   });
// });

tip_radio_inputs.forEach((input) => {
  input.addEventListener("change", (option) => {
    if (option.target.checked) {
      percentage = parseInt(option.target.value);
    }
    console.log(percentage);
  });
});

const get_percentage = () => percentage / 100;

export { get_percentage, tip_radio_inputs };
