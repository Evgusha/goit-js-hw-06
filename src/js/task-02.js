const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const listItems = ingredients.map(item => {
  // console.log(item);
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  const textItem = document.createElement('p');
  textItem.textContent = item;
  itemLi.append(textItem);

  // console.log(itemLi);
  return itemLi;
});

listRef.append(...listItems);