const persons_input = document.querySelector("#persons");

let persons = 0;

persons_input.addEventListener("input", () => {
  let cuantity = parseInt(persons_input.value);
  if (typeof cuantity === "number") {
    persons = cuantity;
  }
});

export { persons, persons_input };
