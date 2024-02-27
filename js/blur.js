const blob = document.getElementById("blob");


const jumbotron = document.getElementById("blur");


window.onpointermove = Event => {
    const scrollTop = window.scrollY;
    const { clientX, clientY } = Event;
    const totY = clientY + scrollTop; 
    
    if (totY < 1000){
    blob.animate({
            left: `${clientX}px`,
            top: `${clientY+scrollTop}px`
          }, { duration: 3000, fill: "forwards" });
        }
}