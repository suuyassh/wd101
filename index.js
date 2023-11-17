if (localStorage.getItem("userNames") == null) {
  localStorage.setItem("userNames", "[]");
}
if (localStorage.getItem("userEmails") == null) {
  localStorage.setItem("userEmails", "[]");
}
if (localStorage.getItem("userPasswords") == null) {
  localStorage.setItem("userPasswords", "[]");
}
if (localStorage.getItem("userDOBs") == null) {
  localStorage.setItem("userDOBs", "[]");
}

const currentDate = new Date();
const minDate = new Date();
const maxDate = new Date();

minDate.setFullYear(currentDate.getFullYear() - 55);

maxDate.setFullYear(currentDate.getFullYear() - 18);

document
  .getElementById("dob")
  .setAttribute("min", minDate.toISOString().split("T")[0]);
document
  .getElementById("dob")
  .setAttribute("max", maxDate.toISOString().split("T")[0]);

function displayUserData() {
  const userNames = JSON.parse(localStorage.getItem("userNames"));
  const userEmails = JSON.parse(localStorage.getItem("userEmails"));
  const userPasswords = JSON.parse(localStorage.getItem("userPasswords"));
  const userDOBs = JSON.parse(localStorage.getItem("userDOBs"));

  const tableBody = document.querySelector("#datatable tbody");

  tableBody.innerHTML = "";

  for (let i = 0; i < userNames.length; i++) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let passCell = document.createElement("td");
    let dobCell = document.createElement("td");
    let agreedCell = document.createElement("td");

    nameCell.textContent = userNames[i];
    emailCell.textContent = userEmails[i];
    passCell.textContent = userPasswords[i];
    dobCell.textContent = userDOBs[i];
    agreedCell.textContent = "true";

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(passCell);
    row.appendChild(dobCell);
    row.appendChild(agreedCell);

    tableBody.appendChild(row);
  }
}

displayUserData();

function submitUserData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;

  var oldNames = JSON.parse(localStorage.getItem("userNames"));
  oldNames.push(name);
  localStorage.setItem("userNames", JSON.stringify(oldNames));

  var oldEmails = JSON.parse(localStorage.getItem("userEmails"));
  oldEmails.push(email);
  localStorage.setItem("userEmails", JSON.stringify(oldEmails));

  var oldPasswords = JSON.parse(localStorage.getItem("userPasswords"));
  oldPasswords.push(password);
  localStorage.setItem("userPasswords", JSON.stringify(oldPasswords));

  var oldDOBs = JSON.parse(localStorage.getItem("userDOBs"));
  oldDOBs.push(dob);
  localStorage.setItem("userDOBs", JSON.stringify(oldDOBs));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";

  displayUserData();
  return false;
}
