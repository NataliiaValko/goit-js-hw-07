const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
    
const insertItems = (array, id) => {
  const createItems = array => array.map(item => {
        const itemRef = document.createElement('li');
        itemRef.textContent = item;
        return itemRef
  });

  document.querySelector(id).append(...createItems(array));
};

insertItems(ingredients, '#ingredients');