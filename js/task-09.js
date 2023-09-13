function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('button').addEventListener('click',()=>{
  let color = getRandomHexColor()
  document.querySelector("body").style.backgroundColor = color
  document.querySelector('span').textContent = color
})

//setInterval(()=>{
//  let color = getRandomHexColor()
//  document.querySelector("body").style.backgroundColor = color
//  document.querySelector('span').textContent = color
//},1)