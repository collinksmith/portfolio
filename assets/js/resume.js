;(function () {
  $("#view-resume").on("click", showResume);

  function showResume() {
    $("#resume-preview").removeClass("hidden");
    bindKeyHandler();
    bindClickHandler();
  }

  function bindKeyHandler() {
    var keyInterval = $( window ).on("keydown", function (event) {
      if (event.which == 27) {
        hideResume();
        clearInterval(keyInterval);
      }
    });
  }

  function bindClickHandler() {
    // Wait for the initial click to register.
    // Then set a listener for a click on the background.
    setTimeout(function () {
      var clickInterval = $("#resume-background").on("click", function () {
        hideResume();
        clearInterval(clickInterval);
      });
    }, 100);
  }

  function hideResume() {
    $("#resume-preview").addClass("hidden");
  }
})();