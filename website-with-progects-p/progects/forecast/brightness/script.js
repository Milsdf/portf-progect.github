rangeInput = document.getElementById("range");
continer = document.getElementsByClassName("conntainer")[0];

rangeInput.addEventListener("change", function (){
    continer.style.filter = "brightness("+rangeInput.value + "%)";
})