var slider_img = document.querySelector(".slider-img");

var images = ['service-Red-Tesla-Car-PNG.png', "tesla_car_black.png", 
              "Tesla-PNG-white.png", "tesla_car_black.png",
              "tesla car colorfull.png", "Tesla-PNG-white.png", "tesla-cyber-truck.jpg" ];

var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();


}

function next(){
    if(i >= images.length) i = -1;
    i++;
    return setImg();

}

function setImg(){
    return slider_img.setAttribute("src", "images/" + images[i]);
}













