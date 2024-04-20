const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const headerText = document.getElementById("headerText");
let interval = null;

window.onload = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    headerText.innerText = headerText.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return headerText.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= headerText.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 10);
}