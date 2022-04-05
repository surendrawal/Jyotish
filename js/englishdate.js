let allDate = new Date();
(function () {
  let year_satart = 1900;
  let year_end = new Date().getFullYear(); // current year
  let year_selected = new Date().getFullYear().toLocaleString();

  let option = "";
  option = "<option selected hidden>Year</option>"; // first option

  for (let i = year_satart; i <= year_end; i++) {
    let selected = i === year_selected ? " selected" : "";
    option += '<option value="' + i + '"' + selected + ">" + i + "</option>";
  }

  document.getElementById("byear").innerHTML = option;
})();
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
$("#byear, #bmonth").change(function () {
  if ($("#byear").val().length > 0 && $("#bmonth").val().length > 0) {
    $("#bday").prop("disabled", false);
    $("#bday").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#bmonth").val(),
      $("#byear").val()
    );

    for (var i = 1; i <= daysInSelectedMonth; i++) {
      $("#bday").append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    $("#bday").prop("disabled", true);
  }
});
//
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

  document.getElementById("year1").innerHTML = option1;
})();
function daysInMonth(month1, year1) {
  return new Date(year1, month1, 0).getDate();
}
// var d = new Date();
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
for (m1 = allDate.getMonth(); m1 <= 11; m1++) {
  var optnm = document.createElement("OPTION");
  optnm.text = monthArray1[m1];
  // server side month start from one
  optnm.value = m1 + 1;

  document.getElementById("kmonth").options.add(optnm);
}
$("#year1, #kmonth").change(function () {
  if ($("#year1").val().length > 0 && $("#kmonth").val().length > 0) {
    $("#kday").prop("disabled", false);
    $("#kday").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#kmonth").val(),
      $("#year1").val()
    );

    for (var i = allDate.getDate(); i <= daysInSelectedMonth; i++) {
      $("#kday").append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    $("#kday").prop("disabled", true);
  }
});
//
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
// var d = new Date();
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
//

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
//
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

  document.getElementById("myear").innerHTML = option1;
})();
function daysInMonth(month1, year1) {
  return new Date(year1, month1, 0).getDate();
}
var monthArray2 = new Array();
monthArray2[0] = "January";
monthArray2[1] = "February";
monthArray2[2] = "March";
monthArray2[3] = "April";
monthArray2[4] = "May";
monthArray2[5] = "June";
monthArray2[6] = "July";
monthArray2[7] = "August";
monthArray2[8] = "September";
monthArray2[9] = "October";
monthArray2[10] = "November";
monthArray2[11] = "December";
for (m2 = allDate.getMonth(); m2 <= 11; m2++) {
  var optnmm = document.createElement("OPTION");
  optnmm.text = monthArray2[m2];
  // server side month start from one
  optnmm.value = m2 + 1;

  document.getElementById("mmonth").options.add(optnmm);
}
$("#myear, #mmonth").change(function () {
  if ($("#myear").val().length > 0 && $("#mmonth").val().length > 0) {
    $("#mday").prop("disabled", false);
    $("#mday").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#mmonth").val(),
      $("#myear").val()
    );

    //  else {
    //     for (var i = 1; i <= daysInSelectedMonth; i++) {
    //       $("#mday").append($("<option></option>").attr("value", i).text(i));
    //     }
    //   }
  } else {
    $("#mday").prop("disabled", true);
  }
});
