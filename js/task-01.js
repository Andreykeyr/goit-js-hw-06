function getList() {
   const listItems = document.querySelector("#categories").children.length;
   const itemsLi = document.querySelectorAll(".item");
 
   console.log(`Number of categories: ${listItems}`);
 
   itemsLi.forEach((elem) => {
     console.log(`category ${elem.firstElementChild.textContent}`);
 
     console.log(`Elements ${elem.lastElementChild.children.length}`);
   });
 }
 
 getList();