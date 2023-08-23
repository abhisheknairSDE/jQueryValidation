$(document).ready(function () {
  const loginForm = $(".loginForm");

  function validateUserName(userName) {
    if (!/^[A-Z][A-Za-z0-9]*$/.test(userName)) {
      $("#userNameError").text("User should start with an uppercase letter.");
      return false;
    } else {
      $("#userNameError").text("");
      return true;
    }
  }

  function validatePassword(password) {
    if (!/[a-z0-9]+$/.test(password)) {
      $("#passwordError").text(
        "Password must consist of lower case letters and digits only."
      );
      return false;
    } else {
      $("#passwordError").text("");
      return true;
    }
  }

  $("#username").blur(function () {
    const uname = $(this).val();
    validateUserName(uname);
  });

  $("#password").blur(function () {
    const pass = $(this).val();
    validatePassword(pass);
  });

  loginForm.submit(function (event) {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();

    if (validateUserName(username) && validatePassword(password)) {
      console.log("test!!");
      window.location.href = "task1.html";
    }
  });
});
