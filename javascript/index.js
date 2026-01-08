function showTodayDate() {
  const today = new Date().toLocaleDateString();
  document.getElementById("todays-date").textContent = "Today's Date: " + today;
  console.log("Date is " + today);
};

function showMesssage() {
  alert("Thank you for downloading my resume!");
}

function showMesssage_coverLetter() {
  alert("Thank you for downloading my cover letter!");
}
