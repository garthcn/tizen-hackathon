//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    window.mySwipe = Swipe(document.getElementById('slider-project'));
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    $('div#sub4').live('pageshow',function(event, ui){
      console.log('p4 shown');
      window.mySwipe = Swipe(document.getElementById('slider-project'));
    });
    $('div#sub4').live('pagehide',function(event, ui){
      console.log('p4 hidden');
      window.mySwipe = Swipe(document.getElementById('slider-project'));
    });

    $('.flip').click(function(){
      if ($(this).find('.flipped').length == 0) {
        $(this).find('.card').addClass('flipped');
        console.log('click face');
        return false;
      }
    });
    $('body').on('click', '.flipped', function(evt) {
      console.log('click flipped');
      $(evt.currentTarget).removeClass('flipped');
      return false;
    });
};
$(document).ready(init);
//$(document).one("mobileinit", function () {
  //$.mobile.pageContainer = $('#container');
  //$.mobile.defaultPageTransition = 'slide';
//});
