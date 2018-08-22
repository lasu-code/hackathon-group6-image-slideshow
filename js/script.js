let arrayOfImages = [ "img/3.jpeg","img/5.jpeg", "img/4.jpeg","img/6.jpeg", "img/7.jpeg", "img/8.jpeg", "img/9.jpeg", "img/10.jpeg"]
let index = 0;
let nex = document.getElementById("nex");
let imageElement = document.getElementById("mainImage");
let pre = document.getElementById("pre");
let slide = document.getElementById("slide");


nex.onclick =function (){
    imageElement.setAttribute("src", arrayOfImages[index])
    if(index < 7){
        index++
    }
    else{
        index = 0;
    }
    console.log(arrayOfImages[index]);
}

pre.onclick =function (){
    imageElement.setAttribute("src", arrayOfImages[index]);
    if(index < 1){
        index = 7;
    }
    else{
        index--;
    }
}
function autoSlide(){
    imageElement.setAttribute("src", arrayOfImages[index])
    if(index < 7){
        index++
    }
    else{
        index = 0;
    }
}

slide.onclick = function(){
    setInterval(autoSlide, 2500)
}


