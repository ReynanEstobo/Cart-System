//Step select all products
//Log all products

const main = document.querySelector("main");

const section = main.firstElementChild;

const section1 = section.nextElementSibling;

const article = section1.firstElementChild;

const h2 = article.firstElementChild;

const ul = h2.nextElementSibling;

const products = ul.children;
//htmlcollection
console.log(products);

//step 2 convert html collection to an array
const productsArray = Array.from(products);
console.log(productsArray);

productsArray.forEach((p) => {
  p.addEventListener("click", () => {
    const h5 = document.createElement("h5");
    h5.innerText = p.firstElementChild.innerText;
    h5.classList.add("bg-red-400", "p-2", "mb-2", "rounded", "drop-shadow-xl");

    cart.appendChild(h5);
  });
});

//get cart
const cart = main.firstElementChild.nextElementSibling.lastElementChild;
console.log(cart);
