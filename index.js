// Getting Input Field Object
let nameField = document.getElementById("userName");
let phoneNumberField = document.getElementById("phoneNo");
let emailIdField = document.getElementById("emailId");
let webUrlField = document.getElementById("webUrl");
let passwordField = document.getElementById("userPassword");
let confirmPasswordField = document.getElementById("confirmPassword");
let submitBtn = document.getElementById("registerBtn");

// Input Field Array
let inputFields = [
  nameField,
  phoneNumberField,
  emailIdField,
  webUrlField,
  passwordField,
];

// Regex for Input Field
let nameRegex = /^[a-zA-Z0-9]+$/;
let phoneNoRegex = /^\+?[0-9]\d{1,20}$/;
let emailIdRegex =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
let webUrlRegex =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

// /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
let passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

// Regex Array
let inputFieldRegex = [
  nameRegex,
  phoneNoRegex,
  emailIdRegex,
  webUrlRegex,
  passwordRegex,
];

const inputFieldsValidationCheck = [false, false, false, false, false, false];

// Output Function
const submitData = () => {
  let username = nameField.value;
  let phoneNo = phoneNumberField.value;
  let emailId = emailIdField.value;
  let webUrl = webUrlField.value;
  let userPassword = passwordField.value;
  let confirmPassword = confirmPasswordField.value;

  const userData = {
    username,
    phoneNo,
    emailId,
    webUrl,
    userPassword,
    confirmPassword,
  };

  console.log(userData);
};

const validateInputField = (index) => {
  if (!inputFieldRegex[index].test(inputFields[index].value)) {
    inputFields[index].setAttribute("style", "border : 3px solid red;");
    inputFieldsValidationCheck[index] = false;
    console.log("InValid : ", inputFields[index].value);
  } else {
    inputFields[index].setAttribute("style", "border : 3px solid green;");
    inputFieldsValidationCheck[index] = true;
    console.log("Valid : ", inputFields[index].value);
  }

  if (inputFieldsValidationCheck.indexOf(false) >= 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.removeAttribute("disabled");
  }
};

const validateConfirmPasssword = () => {
  if (
    confirmPasswordField.value !== passwordField.value ||
    passwordField.value === "" ||
    confirmPasswordField.value === ""
  ) {
    confirmPasswordField.setAttribute("style", "border : 3px solid red;");
    inputFieldsValidationCheck[index] = false;
    console.log("inputFieldsValidationCheck : ", inputFieldsValidationCheck);
    console.log("InValid : ", confirmPasswordField.value);
  } else {
    confirmPasswordField.setAttribute("style", "border : 3px solid green;");
    inputFieldsValidationCheck[5] = true;
    console.log("Valid : ", confirmPasswordField.value);
  }

  if (inputFieldsValidationCheck.indexOf(false) >= 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.removeAttribute("disabled");
  }
};

confirmPasswordField.addEventListener("change", () =>
  validateConfirmPasssword()
);

inputFields.map((inputField, index) => {
  inputField.addEventListener("change", () => validateInputField(index));
});

submitBtn.addEventListener("click", () => submitData());
