function calculate() {
  let year;
  let month;
  let day;

  let currentDate = parseInt(cd.value.slice(8, 10), 10);
  let currentMonth = parseInt(cd.value.slice(5, 7), 10);
  let currentYear = parseInt(cd.value.slice(0, 4), 10);
  console.log(currentYear, currentMonth, currentDate);

  let birthDate = parseInt(dob.value.slice(8, 10), 10);
  let birthMonth = parseInt(dob.value.slice(5, 7), 10);
  let birthYear = parseInt(dob.value.slice(0, 4), 10);
  console.log(birthYear, birthMonth, birthDate);

  if (currentDate >= birthDate) {
    day = currentDate - birthDate;
  } else {
    day =
      currentDate + new Date(currentYear, currentMonth).getDate() - birthDate;
    currentMonth--;
  }
  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }
  year = currentYear - birthYear;

  if (year < 0) {
    ageText.innerHTML = "kya mazak kar rahe ho , shi date dalo";
  } else {
    ageText.innerHTML = year + "years, " + month + "months," + day + "days";
  }
}
