// let myYear = new Date();
// for (y = 1960; y <= myYear.getFullYear(); y++) {
//   var optn = document.createElement("OPTION");
//   optn.text = y;
//   optn.value = y;

//   // if year is 2015 selected
//   if (y == myYear.getFullYear()) {
//     optn.selected = true;
//   }

//   document.getElementById("mdob").options.add(optn);
// }
(function () {
  let milan_start = new Date().getFullYear();
  let milan_end = new Date().getFullYear() + 10; // current year
  let milan_selected = new Date().getFullYear().toLocaleString();

  let optionm = "";
  optionm = "<option selected hidden>Year</option>"; // first option

  for (let i = milan_start; i <= milan_end; i++) {
    let selected = i === milan_selected ? " selected" : "";
    optionm += '<option value="' + i + '"' + selected + ">" + i + "</option>";
  }

  document.getElementById("milanYear").innerHTML = optionm;
})();
var d = new Date();
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
for (m = 0; m <= 11; m++) {
  var optn = document.createElement("OPTION");
  optn.text = monthArray[m];
  // server side month start from one
  optn.value = m + 1;
  // if june selected
  if (m == d.getMonth()) {
    optn.selected = true;
  }
  document.getElementById("kmonth1").options.add(optn);
}

function daysInMonth(month1, year1) {
  return new Date(year1, month1, 0).getDate();
}
$("#milanYear, #kmonth1").change(function () {
  if ($("#milanYear").val().length > 0 && $("#kmonth1").val().length > 0) {
    $("#kday1").prop("disabled", false);
    $("#kday1").find("option").remove();

    var daysInSelectedMonth = daysInMonth(
      $("#kmonth1").val(),
      $("#milanYear").val()
    );
    for (var i = 1; i <= daysInSelectedMonth; i++) {
      $("#kday1").append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    $("#kday1").prop("disabled", true);
  }
});
