var images = ['thumb1.jpg', 'thumb2.jpg','thumb3.jpg','thumb4.jpg','thumb5.jpg','thumb6.jpg','thumb7.jpg','thumb8.jpg','thumb9.jpg','thumb10.jpg','thumb11.jpg','thumb12.jpg'];

var imtxt = ['1: girl','2: coffee','3: donut','4: cereal','5: red girl','6: burger-fries','7: pancakes', '8: platter','9: ribs','10: fruit','11: steak','12: sandwich'];

$(document).ready(function(){





var image;

  for (let i = 0; i < images.length; i++){

    let currentImage = images[i];
    var imageID = 'image' + i;
 // image = currentImage

    let currentText = imtxt[i];
    var txtID = imtxt[i];


    // $('body').append("<img id ='" + imageID + "' class='gallery' src ='images/" + currentImage + "'alt ='Image' />");
    $('body').append(`<img id='${imageID}' class='gallery' src='images/${currentImage}' alt='images'/><span>${txtID}</span>`);

    $("#" + imageID).click(function () {

      $('body').append(`<div id = 'lightbox'></div>`);
      $('#lightbox').css({

        'position': 'fixed',
        'top': '0',
        'left': '0',
        'text-align': 'center',
        'width': '100%',
        'height': '100%',
        'background-color': 'red',
        'display': 'block'
      });

      $('#lightbox').append(`<img id='${imageID}' class='gallery' src='images/${currentImage}' alt='images'/>`);
      $('#lightbox img').css('height','100%');



      $('#lightbox').click(function(){

        $('#lightbox').remove();

      })


      console.log('clicked' + i);

    });


  }

$(".gallery").css('width', '200px');
$(".gallery").css('margin-right', '10px')

});
