let myBtn = document.getElementById("acc-btn");
let rectDiv = document.getElementById("rect");

let isCircle = false;

myBtn.addEventListener('click', () => {

    if(!isCircle){

        rectDiv.style.borderRadius = "50%";
        rectDiv.style.width = "100px";
        
        myBtn.textContent = "Make it a rectangle";
        isCircle = true;
    } else {
        rectDiv.style.borderRadius = "";
        rectDiv.style.width = "200px";
        
        myBtn.textContent = "Make it a circle";
        isCircle = false;

    }
});