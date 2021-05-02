const listRef = document.querySelectorAll('.item');

const countCategory = selector => console.log(`В списке ${listRef.length} категории.`);

const consoleCategoryItems = () => {
    listRef.forEach(item => {
        console.log(`Категория: ${item.querySelector('h2').textContent},
Количество элементов: ${item.querySelector('ul').children.length}`)
    })
}

countCategory();
consoleCategoryItems();