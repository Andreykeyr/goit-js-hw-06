document.getElementById("validation-input").addEventListener('blur',(e)=>{
   document.getElementById("validation-input").classList.remove("invalid","valid")
   if(document.getElementById("validation-input").value.length == 6){
      document.getElementById("validation-input").classList.add("valid")
   }else{
      document.getElementById("validation-input").classList.add("invalid")
   }
})