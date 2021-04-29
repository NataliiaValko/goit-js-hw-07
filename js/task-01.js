// const itemsList = document.querySelectorAll('.item');

// const countsItems = listItems => console.log(`В списке ${listItems.length} категории.`);

// const consoleCategoryItems = list => {
//     list.forEach(item => {
//         console.log(`Категория: ${item.querySelector('h2').textContent},
// Количество элементов: ${item.querySelector('ul').children.length}`)
//     })
// }

// countsItems(itemsList);
// consoleCategoryItems(itemsList);


// const itemsList = document.querySelectorAll('.item');
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