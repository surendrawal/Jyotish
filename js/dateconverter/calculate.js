// const CURRENT_DATE_TIME_EN = "2022-03-14 14:00:17";
// const CURRENT_DATE_EN = CURRENT_DATE_TIME_EN.split(" ")[0];

// const defaultNPDate = "2063-01-01";
// const defaultENDate = "2006-06-15";
// const teamId = parseInt("3");
// function initDatePicker(instance, onChangeMethod) {
//   $(instance).nepaliDatePicker({
//     npdMonth: true,
//     npdYear: true,
//     onChange: function () {
//       if (onChangeMethod) onChangeMethod(instance);
//       checkDate1();
//     },
//   });
// }

// function checkDate() {
//   var nepaliDate = $("#nepaliDate").val();
//   if (nepaliDate != null && nepaliDate != "") {
//     $("#nepaliDate-error").text("");
//     $("#englishDate-error").text("");
//   }
// }
// function checkDate1() {
//   var nepaliDate1 = $("#nepaliDate1").val();
//   if (nepaliDate1 != null && nepaliDate1 != "") {
//     $("#nepaliDate-error").text("");
//     $("#englishDate-error").text("");
//   }
// }

// function momentNepaliToEnglish(value) {
//   return moment(new Date(BS2AD(value)).toISOString());
// }

// $(document).ready(function () {
//   $("#submitDate").val(AD2BS(moment().format("YYYY-MM-DD")));

//   $("input").trigger("onload");
//   $("form").each(function () {
//     $(this).validate({
//       errorElement: "div",
//       errorPlacement: function (error, element) {
//         $(element).closest(".input-group,.form-group").append(error);
//       },
//     });
//   });

//   $(".select2").select2();
//   $("#form").validate();

//   $("#englishDate").datepicker({
//     format: "yyyy-mm-dd",
//     autoclose: true,
//   });
//   $("#englishDate1").datepicker({
//     format: "yyyy-mm-dd",
//     autoclose: true,
//   });

//   $("#englishDate").on("changeDate", function () {
//     $("#nepaliDate").val(AD2BS($("#englishDate").val()));
//     isSameOrBeforeCurrentDate("#nepaliDate", "Birth");
//     $("#englishDate").datepicker("update", BS2AD($("#nepaliDate").val()));
//     calculateAge();
//   });
//   $("#englishDate1").on("changeDate", function () {
//     $("#nepaliDate1").val(AD2BS($("#englishDate1").val()));
//     isSameOrBeforeCurrentDate("#nepaliDate1", "Birth");
//     $("#englishDate1").datepicker("update", BS2AD($("#nepaliDate1").val()));
//     calculateAge1();
//   });

//   $("select").change(function () {
//     updateSelectClass(this);
//   });

//   //class added to remove default select value on print if no value is selected
//   $("select").each(function () {
//     updateSelectClass(this);
//   });

//   if (false && !enableStream) {
//     $("input[name='categoryOfApplicant']").prop("disabled", true);
//   }

//   if (isValidForDynamicStream) triggerAdmissionStream();
// });

// function convertDate() {
//   isSameOrBeforeCurrentDate("#nepaliDate", "Birth");
//   $("#englishDate").datepicker("update", BS2AD($("#nepaliDate").val()));
//   calculateAge();
// }
// function convertDate1() {
//   isSameOrBeforeCurrentDate("#nepaliDate1", "Birth");
//   $("#englishDate1").datepicker("update", BS2AD($("#nepaliDate1").val()));
//   calculateAge1();
// }

// function updateSelectClass(instance) {
//   $(instance).val()
//     ? $(instance).removeClass("hasNoValue")
//     : $(instance).addClass("hasNoValue");
// }

// //calculate age on change nepali or english birth date
// function calculateAge() {
//   const date = $("#englishDate").val(),
//     age = moment.duration(moment().diff(moment(date))),
//     years = age.years(),
//     months = age.months(),
//     days = age.days();
//   if (years < 0) {
//     alert("Birth date cannot be greater than current date");
//     $("#englishDate").datepicker("setDate", "now");
//     return;
//   }

//   let formatedYears = getFormattedAgeValue(years),
//     formatedMonths = getFormattedAgeValue(months),
//     formatedDays = getFormattedAgeValue(days),
//     formatedValues = [],
//     instances = $(".age_box span");
//   formatedValues = formatedValues
//     .concat(formatedYears)
//     .concat(formatedMonths)
//     .concat(formatedDays);
//   $.each(formatedValues, function (index, item) {
//     instances.eq(index).html(item);
//   });

//   $("input[name=age]").val(formatedYears.join(""));
//   $("input[name=ageMonths]").val(formatedMonths.join(""));
//   $("input[name=ageDays]").val(formatedDays.join(""));
// }
// function calculateAge1() {
//   const date1 = $("#englishDate1").val(),
//     age1 = moment.duration(moment().diff(moment(date1))),
//     years1 = age1.years(),
//     months1 = age1.months(),
//     days1 = age1.days();
//   if (years1 < 0) {
//     alert("Birth date cannot be greater than current date");
//     $("#englishDate1").datepicker("setDate", "now");
//     return;
//   }
//   let formatedYears1 = getFormattedAgeValue(years1),
//     formatedMonths1 = getFormattedAgeValue(months1),
//     formatedDays1 = getFormattedAgeValue(days1),
//     formatedValues1 = [],
//     instances1 = $(".age_box1 span");
//   formatedValues1 = formatedValues1
//     .concat(formatedYears1)
//     .concat(formatedMonths1)
//     .concat(formatedDays1);
//   $.each(formatedValues1, function (index, item) {
//     instances1.eq(index).html(item);
//   });

//   $("input[name=age]").val(formatedYears1.join(""));
//   $("input[name=ageMonths]").val(formatedMonths1.join(""));
//   $("input[name=ageDays]").val(formatedDays1.join(""));
// }
// function clearDateValue() {
//   $("#englishDate").val("");
//   $("input[name='age']").val("");
//   $("input[name='ageMonths']").val("");
//   $("input[name='ageDays']").val("");
//   $("#nepaliDate").val("");
//   // $(".age_box").html("");
// }

// function getFormattedAgeValue(val) {
//   let finalVal = parseInt(val) < 10 ? "0" + val : val + "";
//   return finalVal.split("");
// }
let mydate = new Date();
let myCurrentDate =
  mydate.getFullYear() +
  "-" +
  (mydate.getMonth() + 1) +
  "-" +
  mydate.getDate() +
  " " +
  mydate.getHours() +
  ":" +
  mydate.getMinutes() +
  ":" +
  mydate.getSeconds();
// console.log(fd);
const CURRENT_DATE_TIME_EN = myCurrentDate;
const CURRENT_DATE_EN = CURRENT_DATE_TIME_EN.split(" ")[0];

const defaultNPDate = "2063-01-01";
const defaultENDate = "2006-06-15";
const teamId = parseInt("3");
function initDatePicker(instance, onChangeMethod) {
  $(instance).nepaliDatePicker({
    npdMonth: true,
    npdYear: true,
    onChange: function () {
      if (onChangeMethod) onChangeMethod(instance);
      checkDate();
      checkDate1();
    },
  });
}
function initDatePicker(instance2, onChangeMethod) {
  $(instance2).nepaliDatePicker({
    npdMonth: true,
    npdYear: true,
    onChange: function () {
      if (onChangeMethod) onChangeMethod(instance2);
      checkDate2();
    },
  });
}

function checkDate() {
  var nepaliDate = $("#nepaliDate").val();
  if (nepaliDate != null && nepaliDate != "") {
    $("#nepaliDate-error").text("");
    $("#englishDate-error").text("");
  }
}
function checkDate1() {
  var nepaliDate1 = $("#nepaliDate1").val();
  if (nepaliDate1 != null && nepaliDate1 != "") {
    $("#nepaliDate-error").text("");
    $("#englishDate-error").text("");
  }
}
function checkDate2() {
  var nepaliDate2 = $("#nepaliDate2").val();
  if (nepaliDate2 != null && nepaliDate2 != "") {
    $("#nepaliDate-error").text("");
    $("#englishDate-error").text("");
  }
}

function momentNepaliToEnglish(value) {
  return moment(new Date(BS2AD(value)).toISOString());
}

$(document).ready(function () {
  $("#submitDate").val(AD2BS(moment().format("YYYY-MM-DD")));

  $("input").trigger("onload");
  $("form").each(function () {
    $(this).validate({
      errorElement: "div",
      errorPlacement: function (error, element) {
        $(element).closest(".input-group,.form-group").append(error);
      },
    });
  });

  $(".select2").select2();
  $("#form").validate();

  $("#englishDate").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
  });
  $("#englishDate1").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
  });
  $("#englishDate2").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
  });

  $("#englishDate").on("changeDate", function () {
    $("#nepaliDate").val(AD2BS($("#englishDate").val()));
    isSameOrBeforeCurrentDate("#nepaliDate", "Birth");
    $("#englishDate").datepicker("update", BS2AD($("#nepaliDate").val()));
    calculateAge();
  });
  $("#englishDate1").on("changeDate", function () {
    $("#nepaliDate1").val(AD2BS($("#englishDate1").val()));
    isSameOrBeforeCurrentDate("#nepaliDate1", "Birth");
    $("#englishDate1").datepicker("update", BS2AD($("#nepaliDate1").val()));
    calculateAge1();
  });
  $("#englishDate2").on("changeDate", function () {
    $("#nepaliDate2").val(AD2BS($("#englishDate2").val()));
    isSameOrBeforeCurrentDate1("#nepaliDate2", "Birth");
    $("#englishDate2").datepicker("update", BS2AD($("#nepaliDate2").val()));
    calculateAge2();
  });

  $("select").change(function () {
    updateSelectClass(this);
  });

  //class added to remove default select value on print if no value is selected
  $("select").each(function () {
    updateSelectClass(this);
  });

  if (false && !enableStream) {
    $("input[name='categoryOfApplicant']").prop("disabled", true);
  }

  if (isValidForDynamicStream) triggerAdmissionStream();
});

function convertDate() {
  isSameOrBeforeCurrentDate("#nepaliDate", "Birth");
  $("#englishDate").datepicker("update", BS2AD($("#nepaliDate").val()));
  calculateAge();
}
function convertDate1() {
  isSameOrBeforeCurrentDate("#nepaliDate1", "Birth");
  $("#englishDate1").datepicker("update", BS2AD($("#nepaliDate1").val()));
  calculateAge1();
}
function convertDate2() {
  isSameOrBeforeCurrentDate1("#nepaliDate2", "Birth");
  $("#englishDate2").datepicker("update", BS2AD($("#nepaliDate2").val()));
  calculateAge1();
}

function updateSelectClass(instance) {
  $(instance).val()
    ? $(instance).removeClass("hasNoValue")
    : $(instance).addClass("hasNoValue");
}
function updateSelectClass(instance2) {
  $(instance2).val()
    ? $(instance2).removeClass("hasNoValue")
    : $(instance2).addClass("hasNoValue");
}

//calculate age on change nepali or english birth date
function calculateAge() {
  const date = $("#englishDate").val(),
    age = moment.duration(moment().diff(moment(date))),
    years = age.years(),
    months = age.months(),
    days = age.days();
  if (years < 0) {
    alert("Birth date cannot be greater than current date");
    $("#englishDate").datepicker("setDate", "now");
    return;
  }

  let formatedYears = getFormattedAgeValue(years),
    formatedMonths = getFormattedAgeValue(months),
    formatedDays = getFormattedAgeValue(days),
    formatedValues = [],
    instances = $(".age_box span");
  formatedValues = formatedValues
    .concat(formatedYears)
    .concat(formatedMonths)
    .concat(formatedDays);
  $.each(formatedValues, function (index, item) {
    instances.eq(index).html(item);
  });

  $("input[name=age]").val(formatedYears.join(""));
  $("input[name=ageMonths]").val(formatedMonths.join(""));
  $("input[name=ageDays]").val(formatedDays.join(""));
}
function calculateAge1() {
  const date1 = $("#englishDate1").val(),
    age1 = moment.duration(moment().diff(moment(date1))),
    years1 = age1.years(),
    months1 = age1.months(),
    days1 = age1.days();
  if (years1 < 0) {
    alert("Birth date cannot be greater than current date");
    $("#englishDate1").datepicker("setDate", "now");
    return;
  }
  let formatedYears1 = getFormattedAgeValue(years1),
    formatedMonths1 = getFormattedAgeValue(months1),
    formatedDays1 = getFormattedAgeValue(days1),
    formatedValues1 = [],
    instances1 = $(".age_box1 span");
  formatedValues1 = formatedValues1
    .concat(formatedYears1)
    .concat(formatedMonths1)
    .concat(formatedDays1);
  $.each(formatedValues1, function (index, item) {
    instances1.eq(index).html(item);
  });

  $("input[name=age]").val(formatedYears1.join(""));
  $("input[name=ageMonths]").val(formatedMonths1.join(""));
  $("input[name=ageDays]").val(formatedDays1.join(""));
}
function calculateAge2() {
  const date2 = $("#englishDate2").val(),
    age2 = moment.duration(moment().diff(moment(date2))),
    years2 = age2.years(),
    months2 = age2.months(),
    days2 = age2.days();
  if (years2 < 0) {
    alert("Birth date cannot be greater than current date");
    $("#englishDate2").datepicker("setDate", "now");
    return;
  }
  let formatedYears2 = getFormattedAgeValue(years2),
    formatedMonths2 = getFormattedAgeValue(months2),
    formatedDays2 = getFormattedAgeValue(days2),
    formatedValues2 = [],
    instances2 = $(".age_box2 span");
  formatedValues2 = formatedValues2
    .concat(formatedYears2)
    .concat(formatedMonths2)
    .concat(formatedDays2);
  $.each(formatedValues2, function (index, item) {
    instances2.eq(index).html(item);
  });

  $("input[name=age]").val(formatedYears2.join(""));
  $("input[name=ageMonths]").val(formatedMonths2.join(""));
  $("input[name=ageDays]").val(formatedDays2.join(""));
}
function clearDateValue() {
  $("#englishDate").val("");
  $("#englishDate1").val("");
  $("#englishDate2").val("");
  $("input[name='age']").val("");
  $("input[name='ageMonths']").val("");
  $("input[name='ageDays']").val("");
  $("#nepaliDate").val("");
  $("#nepaliDate1").val("");
  $("#nepaliDate2").val("");
  // $(".age_box").html("");
}

function getFormattedAgeValue(val) {
  let finalVal = parseInt(val) < 10 ? "0" + val : val + "";
  return finalVal.split("");
}
