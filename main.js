var text = document.getElementById("text");
var submit = document.getElementById("submit");
var erore = document.getElementById("erore");
var image = document.getElementById("image");
var widthandhieght = document.getElementById("widthandhieght");
submit.addEventListener("click", () => {
        if(text.value != ""){
          erore.innerHTML = ""
          var TextValue = text.value;
          image.src = TextValue;
          console.log("the width :" + image.width);
          console.log("the height :" + image.height);
          widthandhieght.innerHTML = image.width + "*" + image.height;
        }
});