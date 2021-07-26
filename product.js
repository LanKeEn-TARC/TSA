//this is for floating window when clicking the products

//let user change the product config

// keyboard products change colour
$(document).ready(function() {
 
    $('.keyboard1-choose-color input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });

  $(document).ready(function() {
 
    $('.keyboard2-choose-color input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });

  $(document).ready(function() {
 
    $('.keyboard3-choose-color input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });