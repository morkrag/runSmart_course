  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  }); 

  
document.querySelector('.prev').onclick = function () {
  slider.goTo("prev");
};

document.querySelector('.next').onclick = function () {
  slider.goTo("next");
};