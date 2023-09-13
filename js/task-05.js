document.getElementById("name-input").addEventListener('keyup',(e)=>{
   if(document.getElementById("name-input").value != ""){
   document.getElementById("name-output").textContent = document.getElementById("name-input").value
   }else{
      document.getElementById("name-output").textContent = "Anonymous"
   }
})