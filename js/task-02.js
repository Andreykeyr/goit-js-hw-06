const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];
ingredients.forEach(function(text){
   let li = document.createElement("li")
   li.textContent = text
   li.classList.add('item')
   document.getElementById("ingredients").append(li)
})