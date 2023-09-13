let counterValue = 0

let buttons = document.querySelectorAll('button')
for(let i = 0; i<buttons.length;i++){
buttons[i].addEventListener("click",()=>{
      if(buttons[i].getAttribute('data-action') === "decrement"){
            counterValue--
      }else if(buttons[i].getAttribute('data-action') === "increment"){
            counterValue++
      }
      document.getElementById("value").textContent = counterValue
})
}