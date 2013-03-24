(function ($, window, undefined) {
  var $container = $(".flex-container");

  $(".setFlex").on("click", "a", function (evt) {
    evt.preventDefault();

    var flexLayout = $(this).data("flex-layout");

    console.log(flexLayout);
    $container.attr("class", "flex-container " + flexLayout);
  });
})(jQuery, window);