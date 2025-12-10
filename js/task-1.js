const categoriesElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesElem.length}`);

function foo() {
  categoriesElem.forEach(item => {
    const titleElem = item.querySelector('h2');
    const name = titleElem.textContent;

    const ulElem = item.querySelector('ul');
    const items = ulElem.children.length;

    console.log(`Kategory: ${name}`);
    console.log(`Elements: ${items}`);
  });
}
foo();
