const form = document.querySelector("#myform");
const ulList = document.querySelector("ul");

let history = [];
let idD = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let text = e.target.elements.text.value;
  let category = e.target.elements.category.value;
  create(text, category);
});

function create(text, category) {
  let element = {
    id: (idD++).toString(),
    text,
    category,
  };
  history.push(element);
  console.log(history);

  let jj = document.createElement("li");
  jj.innerHTML = `
    <h2>text: ${element.text}</h2>
    <p>category: ${element.category}</p>
    <p>icon: icon ${element.category}</p>
    `;
  form.after(jj);
}
