# jQueryValidation

## Overview

This project demonstrates a simple yet robust login validation implemented in HTML, CSS, and jQuery. It serves as an example of how to validate user input in a form, provide feedback, and then redirect the user to another page upon successful login.

![Login Page](./Screenshots/ss1.png)

## Features

- Validates that the username starts with an uppercase letter
- Validates that the password consists of lower-case letters and digits only
- Displays error messages dynamically if validation fails
- Redirects to another page upon successful login

![Validation Example](./Screenshots/ss2.png)

## Technologies Used

- HTML5
- CSS3
- jQuery 3.6.0

## How to Use

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/abhisheknairSDE/jQueryValidation.git
   ```
2. Open the `index.html` file in your browser.
3. Try logging in!

## Code Snippets

### HTML

```html
<form class="loginForm">
  <div class="input-group">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />
    <div id="userNameError" class="error"></div>
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
    <div id="passwordError" class="error"></div>
  </div>
  <div class="input-group">
    <button type="submit">Login</button>
  </div>
</form>
```

### jQuery

```javascript
loginForm.submit(function (event) {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();

    if (validateUserName(username) && validatePassword(password)) {
      console.log("test!!");
      window.location.href = "./AnotherStaticPage/task1.html";
    }
  });
```

## Contributions

Feel free to contribute to this project by creating a pull request.
