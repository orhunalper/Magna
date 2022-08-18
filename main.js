const menuBtn= document.querySelector('.menu-btn');
const menuItems= document.querySelector('.menu-items');
const sidebar= document.querySelector('.sidebar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuItems.classList.add('open');
    sidebar.classList.add('open');
    menuOpen= true;
  } else {
    menuBtn.classList.remove('open');
    menuItems.classList.remove('open');
    sidebar.classList.remove('open');
    menuOpen= false;
  }
});


$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);



    console.log('current '+current);
    console.log('prev '+prev);
  }
});
