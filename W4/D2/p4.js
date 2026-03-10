const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectInput = document.getElementById("term");
const term = document.getElementById("inspectBtn");

const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click", function () {

    console.log("Form: ", studentForm);
    console.log("Name: ", nameInput.value);
    console.log("Email: ", emailInput.value);

    const selectedGender =
        document.querySelector('input[name="gender"]:checked');

    console.log("Gender:", selectedGender ? selectedGender.value : "Not selected");

    console.log("Accepted terms: ", inspectInput.checked);

});