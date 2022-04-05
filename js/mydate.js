var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "np",
});
$(document).ready(function () {
  $(".iti__flag-container").click(function () {
    var countryCode = $(".iti__selected-flag").attr("title");
    var countryCode = countryCode.replace(/[^0-9]/g, "");
    $("#phone").val("");
    $("#phone").val("+" + countryCode + " " + $("#phone").val());
  });
});
var input = document.querySelector("#phone1");
window.intlTelInput(input, {
  initialCountry: "np",
});
$(document).ready(function () {
  $(".iti__flag-container").click(function () {
    var countryCode = $(".iti__selected-flag").attr("title");
    var countryCode = countryCode.replace(/[^0-9]/g, "");
    $("#phone1").val("");
    $("#phone1").val("+" + countryCode + " " + $("#phone1").val());
  });
});
var allDate = new Date();
(function () {
  let year_satart1 = new Date().getFullYear();
  let year_end1 = new Date().getFullYear() + 10; // current year
  let year_selected1 = new Date().getFullYear().toLocaleString();

  let option1 = "";
  option1 = "<option selected hidden>Year</option>"; // first option

  for (let i = year_satart1; i <= year_end1; i++) {
    let selected = i === year_selected1 ? " selected" : "";
    option1 += '<option value="' + i + '"' + selected + ">" + i + "</option>";
  }

  document.getElementById("year2").innerHTML = option1;
})();
function daysInMonth(month1, year1) {
  return new Date(year1, month1, 0).getDate();
}

var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for (m = allDate.getMonth(); m <= 11; m++) {
  var optn = document.createElement("OPTION");
  optn.text = monthArray[m];
  // server side month start from one
  optn.value = m + 1;

  document.getElementById("kmonth1").options.add(optn);
}

$("#year2, #kmonth1").change(function () {
  if ($("#year2").val().length > 0 && $("#kmonth1").val().length > 0) {
    $("#kday1").prop("disabled", false);
    $("#kday1").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#kmonth1").val(),
      $("#year2").val()
    );

    for (var i = allDate.getDate(); i <= daysInSelectedMonth; i++) {
      $("#kday1").append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    $("#kday1").prop("disabled", true);
  }
});
(function () {
  let year_satart1 = 1900;
  let year_end1 = new Date().getFullYear(); // current year
  let year_selected1 = new Date().getFullYear().toLocaleString();

  let option1 = "";
  option1 = "<option selected hidden>Year</option>"; // first option

  for (let i = year_satart1; i <= year_end1; i++) {
    let selected = i === year_selected1 ? " selected" : "";
    option1 += '<option value="' + i + '"' + selected + ">" + i + "</option>";
  }

  document.getElementById("year3").innerHTML = option1;
})();
var monthArray1 = new Array();
monthArray1[0] = "January";
monthArray1[1] = "February";
monthArray1[2] = "March";
monthArray1[3] = "April";
monthArray1[4] = "May";
monthArray1[5] = "June";
monthArray1[6] = "July";
monthArray1[7] = "August";
monthArray1[8] = "September";
monthArray1[9] = "October";
monthArray1[10] = "November";
monthArray1[11] = "December";
for (m1 = 0; m1 <= 11; m1++) {
  var optn1 = document.createElement("OPTION");
  optn1.text = monthArray1[m1];
  // server side month start from one
  optn1.value = m1 + 1;

  document.getElementById("kmonth2").options.add(optn1);
}
function daysInMonth(month1, year1) {
  return new Date(year1, month1, 0).getDate();
}
$("#year3, #kmonth2").change(function () {
  if ($("#year3").val().length > 0 && $("#kmonth2").val().length > 0) {
    $("#kday2").prop("disabled", false);
    $("#kday2").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#kmonth2").val(),
      $("#year3").val()
    );
    for (var i = 1; i <= daysInSelectedMonth; i++) {
      $("#kday2").append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    $("#kday2").prop("disabled", true);
  }
});

var selectMinute = document.getElementById("selectMint");
var myMinute;
for (let i = 0; i <= 59; i++) {
  myMinute += "<option>" + i + "</option>";
}
selectMinute.innerHTML = myMinute;

var selectHour = document.getElementById("selectHour");
var myHour;
for (let h = 1; h <= 12; h++) {
  myHour += "<option>" + h + "</option>";
}

selectHour.innerHTML = myHour;
