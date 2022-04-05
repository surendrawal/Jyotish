const operationDateSetting = "np";

function isEqualOrAfter(dateFirst, dateSecond) {
  return moment(dateFirst).isSameOrAfter(moment(dateSecond));
}

function isBetweenDates(date, dates) {
  return isEqualOrAfter(date, dates[0]) && isEqualOrBefore(date, dates[1]);
}

function isEqualOrBefore(dateFirst, dateSecond) {
  return moment(dateFirst).isSameOrBefore(moment(dateSecond));
}

function getEngDate(nepDate) {
  return BS2AD(date);
}

function setDate(inputFieldInstance, date, operationDateSetting = "np") {
  if (operationDateSetting === "np") {
    inputFieldInstance.val(date);
  } else {
    setTimeout(function () {
      inputFieldInstance.datepicker("update", date);
    });
  }
  // if (date) resetError(inputFieldInstance);
}

function getCurrentDate(operationDateSetting = "en") {
  if (operationDateSetting === "np") return AD2BS(CURRENT_DATE_EN);
  return CURRENT_DATE_EN;
}

function getFinalDate(date, isTimeRequired = true, opd = null) {
  if (!date) return "";
  if ((opd ? opd : operationDateSetting) === "np") {
    const splitted = date.split(" ");
    if (splitted.length === 2) {
      if (isTimeRequired) return AD2BS(splitted[0]) + " " + splitted[1];
      else return AD2BS(splitted[0]);
    } else return AD2BS(splitted[0]);
  } else {
    if (!isTimeRequired) date = date.split(" ")[0];
  }

  return date;
}

function isSameOrBeforeCurrentDate(instance, fieldName = "") {
  let val = $.trim($(instance).val());
  if (!val) return;
  if (operationDateSetting === "np") val = BS2AD(val);
  let currentDate = getCurrentDate("en");
  if (!isEqualOrBefore(val, currentDate)) {
    Swal.fire({
      icon: "error",

      text: "Date must be less than or equals to current date",
    });
    // Swal.fire("Date must be less than or equals to current date");
    // alert(
    //   `${fieldName} ${
    //     fieldName ? "d" : "D"
    //   }ate must be less than or equals to current date.`
    // );
    setDate(
      $(instance),
      operationDateSetting === "np" ? AD2BS(currentDate) : currentDate,
      operationDateSetting
    );
  }

  //restrict date to be greater than max date
  if ($(instance).hasClass("max-date")) {
    const maxDateEng = $(instance).attr("data-max-date");
    if (maxDateEng && !isEqualOrBefore(val, maxDateEng)) {
      const finalDate = getFinalDate(maxDateEng);
      alert(`Date must be less than or equals to ${finalDate}.`);
      setDate($(instance), finalDate, operationDateSetting);
    }
  }
}

function isSameOrBeforeCurrentDate1(instance2, fieldName = "") {
  let val1 = $.trim($(instance2).val());
  if (!val1) return;
  if (operationDateSetting === "np") val1 = BS2AD(val1);
  let currentDate1 = getCurrentDate("en");
  if (!isEqualOrAfter(val1, currentDate1)) {
    Swal.fire({
      icon: "error",
      text: "Date must be greater than or equals to current date",
    });
    // alert("Date must be greater than or equals to current date");
    // `${fieldName} ${
    //   fieldName ? "d" : "D"
    // }ate must be greater than or equals to current date.`
    setDate(
      $(instance2),
      operationDateSetting === "np" ? AD2BS(currentDate1) : currentDate1,
      operationDateSetting
    );
  }

  //restrict date to be greater than max date
  if ($(instance2).hasClass("max-date")) {
    const maxDateEng1 = $(instance).attr("data-max-date");
    if (maxDateEng1 && !isEqualOrBefore(val1, maxDateEng1)) {
      const finalDate = getFinalDate(maxDateEng1);
      alert(`Date must be greater than or equals to ${finalDate}.`);
      setDate($(instance2), finalDate, operationDateSetting);
    }
  }
}
