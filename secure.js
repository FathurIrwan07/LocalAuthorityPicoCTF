document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // The correct username and password
    var correctUsername = "admin";
    var correctPassword = "FathurGantengBos";

    // The flag
    var flag = "TI404{Br0kol1_Man_Ftr}";

    // Get the result element
    var resultElement = document.getElementById("result");

    // Check if the username and password are correct
    if (username === correctUsername && password === correctPassword) {
      resultElement.textContent = "Correct! The flag is: " + flag;
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Incorrect username or password. Try again!";
      resultElement.style.color = "red";
    }
  });
