const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){ //replaced : display with visibility and "none" with "hidden"    
        myImg.style.visibility = "visible"; // "block" with "visible"
        myBtn.textContent = "It's Embarrassing. Hide me, Please!";
    }
    else{
    myImg.style.visibility = "hidden";
    myBtn.textContent = "It's Dark here. I'm Scared!";
    }
    

})