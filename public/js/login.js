

const loginFormHandler = async (event) => {
  event.preventDefault();

  //changed userID to username to be consistent with what we were calling the user
  const username = document.querySelector("#user-name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const employeeName = document.querySelector("#name-signup").value.trim();
//   const newUsername = document.querySelector("#username-signup").value.trim();
//   const newPassword = document.querySelector("#password-signup").value.trim();
//   const restrictions = document
//     .querySelector("#restrictions-signup")
//     .value.trim();

//   if (employeeName && newUsername && getNewLibraryCopy && restrictions) {
//     const response = await fetch("/api/users/", {
//       method: "POST",
//       body: JSON.stringify({
//         employeeName,
//         newUsername,
//         newPassword,
//         restrictions,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up");
//     }
//   }
// };

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
