/*company*/
$(document).ready(function () {
  var image = $(".slide img");

  image.each(function (i) {
    var container = $("nav ul");
    var imageUrl = image[i].src;

    container.append(getimage(imageUrl));
  });

  $("nav li img", this).click(function () {
    var nav = $(this);
    var url = nav.attr("src");

    image.fadeOut().fadeIn().attr("src", url);
  });

  function getimage(imageUrl) {
    return '<li><img src=" ' + imageUrl + ' " alt=""></li>';
  }
});

/*colormodeのjs*/
/*
let rangeColors = $('.range-colors');
let currentColor = $('.current-color');
let sliderRed = $('#slider-red');
let sliderGreen = $('#slider-green');
let sliderlue = $('#slider-blue');
let customColor;
let red;
let green;
let blue;

rangeColors.on('change', function(){
    red = sliderRed.val();
    green = sliderGreen.val();
    blue = sliderlue.val();
    customColor = `rgb(${red}, ${green}, ${blue})`

    $(this).find('.range-slider-value').html($(this).find('.range-slider-range').val());

    currentColor.css({'background-color': `${customColor}`});
});
*/
/*font-variableのcss*/
/*
$("#setFontSize").on("input",function () {
           $('#name').css("font-size", $(this).val() + "px");
   });
$("#setFontWeight").on("input",function () {
           $('#name').css("font-weight", $(this).val() + "");
   });

$("#setLetterSpacing").on("input",function () {
           $('#name').css("letter-spacing", $(this).val() + "px");
   });
*/
/*imageスライドショー js*/
var setImage = [
  "https://i.imgur.com/GuhCFBm.jpg",
  "https://i.imgur.com/unSn6mo.jpg",
  //"https://i.imgur.com/mFjjdqw.jpg",
  "https://i.imgur.com/2OJL3Eo.jpg",
  "https://i.imgur.com/vQ6XI9O.jpg"];

var counter = 0;

function slideimage(){
    if( counter >= (setImage.length) ){
        counter = 0;
    }
    document.getElementById( "slideshow" ).style.backgroundImage = "url(" + setImage[counter] + ")";
    counter++;
}

setInterval("slideimage()",3000);
