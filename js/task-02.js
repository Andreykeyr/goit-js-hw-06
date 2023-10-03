const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];

function addLiItem() {
   const ingredientsArr = [];
   const list = document.querySelector('#ingredients');
   ingredients.forEach(el => {
     const addLi = document.createElement('li');
     addLi.classList.add('item');
     addLi.textContent = el;
     ingredientsArr.push(addLi);
 
 
   });
 
   list.append(...ingredientsArr);
 
 }
 addLiItem();