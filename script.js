let tableData = [];

// Get the HTML elements
const addRowBtn = document.getElementById("addRow");
const saveBtn = document.getElementById("save");
const tableBody = document.querySelector("#myTable tbody");

let id = 0;
// Add a new row to the table
addRowBtn.addEventListener("click", function () {
  id++;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${id}</td>
    <td><input type="text" name="student_name"></td>
    <td><input type="text" name="student_roll"></td>
    <td><input type="text" name="subject"></td>
    <td><input type="text" name="marks"></td>
    <td><input type="text" name="markedBy"></td>
  `;
  tableBody.appendChild(tr);
});

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Save the table data
saveBtn.addEventListener("click", function () {
  const inputFields = document.querySelectorAll("tbody input[type='text']");

  // Validate the input fields
  let isValid = true;
  inputFields.forEach(function (input) {
    if (input.value.trim() === "") {
      isValid = false;
      input.style.border = "1px solid red";
    } else if (input.name === "marks" && isNaN(input.value)) {
      isValid = false;
      input.style.border = "1px solid red";
    } else if (input.name === "markedBy" && !isValidEmail(input.value)) {
      isValid = false;
      input.style.border = "1px solid red";
    } else {
      input.style.border = "none";
    }
  });
  if (isValid) {
    const rowData = {
      id: tableData.length + 1,
      student_name: inputFields[0].value,
      student_roll: inputFields[1].value,
      subject: inputFields[2].value,
      marks: inputFields[3].value,
      markedBy: inputFields[4].value,
    };
    console.log(rowData);
  }
});
