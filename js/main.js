$(document).ready(function() {
  ////////////////////////////////////////////////////////////////////////////form//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(".btn-phone").on("click", function(){
    $(".form-back").show();
    $(".form-cont1").show();
    $(".form-cont1").css('display', 'inline-block');
  });
  $(".burger").on("click", function(){
    $(".form-back").show();
    $(".form-cont1").show();
    $(".form-cont1").css('display', 'inline-block');
    event.preventDefault;
    return false;
  });
  $(document).mouseup(function (e) {
    var container = $(".form-cont1 , .form-cont2");
      if (container.has(e.target).length === 0){
        $(".form-back").hide();
        container.hide();
      }
    });
    $(".form").submit(function(event){
        $(".form-cont1").hide();
        $(".form-back").show();
        $(".form-cont2").show();
        $(".form-cont2").css('display', 'inline-block');
        event.preventDefault;
        return false;
    });


    function handlerIn() {
      $(".form-btn-phone span:after").css('backgroundImage', 'url(../images/wifi1.gif)');
    };
    function handlerOut() {
      $(".form-btn-phone span:after").css('backgroundImage', 'url(../images/phone.png)');
    };
  $(".btn-phone").mouseenter( handlerIn ).mouseleave( handlerOut );

  ////////////////////////////////////////////////////////////////////////////phone//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#phone").mask("+38(999) 999-9999");
});

$(window).resize(function(){

});
