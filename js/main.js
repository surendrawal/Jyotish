function display_ct5() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? " PM" : " AM";
  // hours=x.getHours()
  var x1 =
    (x.getHours() % 12 || 12) +
    ":" +
    x.getMinutes() +
    ":" +
    x.getSeconds() +
    " " +
    ampm;
  var x2 = x.toLocaleDateString();

  document.getElementById("tm").innerHTML = x1;
  document.getElementById("dt").innerHTML = x2;
  display_c5();
}
function display_c5() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct5()", refresh);
}
display_c5();

$(".client").owlCarousel({
  loop: true,
  stagePadding: 6,
  margin: 20,
  autoplay: true,
  nav: true,

  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: true,
    },
    350: {
      items: 2,
      dots: false,
      nav: true,
    },
    500: {
      items: 3,
      dots: true,
      nav: true,
    },
    700: {
      items: 4,
      dots: true,
    },
    1000: {
      items: 5,
      dots: true,
    },
  },
});
$(".ind-slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
});
$(".home_ads_banner").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  margin: 0,
  dots: false,
});
$(".mobile_ads_slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  margin: 0,
  dots: false,
});
