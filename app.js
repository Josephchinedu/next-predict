jQuery(document).ready(function($) {
  var promoticker = function() {
    var window_width = window.innerWidth;
    var speed = 12 * window_width;
    $('#promo-notifications li:first').animate( {left: '-980px'}, speed, 'linear', function() {
      $(this).detach().appendTo('#promo-notifications ul').css('left', "100%");
      promoticker();
    });
  };
  if ($("#promo-notifications li").length > 1) {
    promoticker();
  }
});



