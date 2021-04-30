const listRef = selector => document.querySelectorAll(selector);
const countCategory = selector => console.log(`В списке ${listRef(selector).length} категории.`);
const consoleCategoryItems = (selector) => {
    listRef(selector).forEach(item => {
        console.log(`Категория: ${item.querySelector('h2').textContent},
Количество элементов: ${item.querySelector('ul').children.length}`)
    })
}

countCategory('.item');
consoleCategoryItems('.item');