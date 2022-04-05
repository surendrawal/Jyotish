var dwidth, dheight;
var navItems = $(".navbar-nav li");
var total_index = navItems.length;
// var charLimit = 1;

$(document).ready(function () {
  $(".datepicker, .timepicker").keydown(false);
  $(".datepicker, .timepicker").attr("autocomplete", "off");

  $(".btn-prev").click(function () {
    prevPage();
  });

  $("input").iCheck({
    checkboxClass: "icheckbox_square-red",
    radioClass: "iradio_square-red",
    increaseArea: "20%",
  });

  $("input").on("ifChanged", function () {
    var propType = "readonly";
    var attr = $(this).attr("data-target-input");

    if (typeof attr != typeof undefined) {
      var target = $("input[data-parent=" + attr + "]");
      var radio = target.attr("type") == "radio";

      //console.log(attr);
      //console.log(target);
      //console.log(radio);

      if (radio) {
        propType = "disabled";

        if (target.prop("disabled")) {
          $(target[0]).iCheck("check");
          target.iCheck("enable");
        } else {
          target.iCheck("uncheck");
          target.iCheck("disable");
        }
        /*
				console.log(target.prop("disabled"));
				if(target.prop("disabled")){ //target is disabled
					console.log("enabling...")
					target.iCheck('enable'); 
				}else{ //target is enabled
					console.log("disabling...")
					target.iCheck('uncheck'); 
					target.iCheck('disable'); 
				}*/
      } else {
        target.prop(propType, function (idx, oldProp) {
          if (oldProp !== true) {
            target.val("");
          } else {
            target.focus();
          }
          return !oldProp;
        });
      }
    }
  });

  //display image on image upload
  $("input.imgInput").change(function () {
    var img = $("." + $(this).attr("imgTarget"));

    if ((file = this.files[0])) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(img).attr("src", e.target.result).addClass("imagePresent");
        dwidth = $(img).attr("width");
        dheight = $(img).attr("height");
        updateImageDimension(img, dwidth, dheight);
      };

      reader.readAsDataURL(this.files[0]);
    } else {
      updateImageDimension(img);
    }
  });

  $("#photo_upload img").each(function (i, img) {
    dwidth = $(img).attr("width");
    dheight = $(img).attr("height");
    updateImageDimension(img, dwidth, dheight);
  });

  //student name entry
  // $("input[name='fullNameInEnglish']").keydown(function(e) {
  //     var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
  //     if (e.which == 8 && this.value.length == 0) {
  //         $(this).prev('.form-control').focus();
  //         $(this).prev('.form-control').val('');
  //     } else if ($.inArray(e.which, keys) >= 0) {
  //         return true;
  //     } else if (this.value.length >= charLimit) {
  //         $(this).next('.form-control').focus();
  //         return false;
  //     } else if (e.which <= 64 || e.which >= 91) {
  //         return false;
  //     }
  // }).keyup (function (e) {
  //     if (e.which !=8 && e.which!=37 && e.which!=39 && this.value.length >= charLimit) {
  //         $(this).next('.form-control').focus();
  //         return false;
  //     }
  // });
});

function nextPage() {
  var index = $(".navbar-nav li.active").index();
  var targetIndex = index + 1;
  changePage(targetIndex);
}

function prevPage() {
  var index = $(".navbar-nav li.active").index();
  var targetIndex = index - 1;
  changePage(targetIndex);
}

function changePage(targetIndex) {
  navItems.removeClass("active");
  $(".form-block").removeClass("active");

  navItems.eq(targetIndex).addClass("active");
  $(".form-block").eq(targetIndex).addClass("active");

  if (targetIndex == 0) {
    $(".btn-prev,.btn-submit").addClass("d-none");
    $(".btn-next").removeClass("d-none");
  } else if (targetIndex == total_index - 1) {
    $(".btn-prev,.btn-submit").removeClass("d-none");
    $(".btn-next").addClass("d-none");
  } else {
    $(".btn-submit").addClass("d-none");
    $(".btn-next,.btn-prev").removeClass("d-none");
  }
  $(window).scrollTop(0);
}

function updateImageDimension(img, dwidth, dheight) {
  // don not auto adjust size (quick fix for student image)
  if ($(img).hasClass("size-static")) return;

  var image = new Image();

  image.onload = function () {
    cw = dwidth;
    ch = dheight;
    var imageAspectRatio = image.width / image.height;
    var dx = (dy = 0);

    if (dheight == 180) {
      var aspectRatio = 0.83333333333;
      if (imageAspectRatio > aspectRatio) {
        cw = imageAspectRatio * ch;
        dx = (cw - 150) / 2;
      } else {
        ch = (1 / imageAspectRatio) * cw;
        dy = (ch - 180) / 2;
      }
    } else {
      var aspectRatio = 2.30769230769;
      if (imageAspectRatio > aspectRatio) {
        ch = (1 / imageAspectRatio) * cw;
        dx = (cw - 185) / 2;
      } else {
        cw = imageAspectRatio * ch;
        dy = (ch - 80) / 2;
      }
    }

    $(img)
      .removeClass("emptyImage")
      .css({
        width: cw,
        height: ch,
        "margin-left": -dx + "px",
        "margin-top": -dy + "px",
      });
  };
  image.src = $(img).attr("src");
}
