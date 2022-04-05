$(window).load(function () {
  var body = $("article"),
    universe = $("#universe"),
    solarsys = $("#solar-system");
  var init = function () {
    body
      .removeClass("opening")
      .addClass("view-3D")
      .delay(2000)
      .queue(function () {
        $(this).removeClass("hide-UI").addClass("set-speed");
        $(this).dequeue();
      });
  };

  var setView = function (view) {
    universe.removeClass().addClass(view);
  };

  $(".set-speed").click(function () {
    setView("scale-stretched set-speed");
  });

  $(".set-distance").click(function () {
    setView("scale-d set-distance");
  });

  init();
});
