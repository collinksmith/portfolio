;(function () {

  $("#asteroids").on("click", openModal);
  
  function openModal (e) {
    var modalName = $(e.currentTarget).attr("id");
    var modal = $.find("#m-" + modalName);
    $(modal).css("display", "block");
  };
})();