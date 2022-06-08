const homepageDashboard = async (event) => {
  event.preventDefault();

  const newInventoryButton = document
    .querySelector("#new-inventory-button")
    .value.trim();
  const onHandButton = document.querySelector("#on-hand-button").value.trim();
  const newEmployeeButton = document
    .querySelector("#register-new-employee")
    .value.trim();

  if (username && password) {
    const response = await fetch("/api/inventory", {
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

const signupFormHandler = async (event) => {
  event.preventDefault();

  const employeeName = document.querySelector("#name-signup").value.trim();
  const newUsername = document.querySelector("#username-signup").value.trim();
  const newPassword = document.querySelector("#password-signup").value.trim();
  const restrictions = document
    .querySelector("#restrictions-signup")
    .value.trim();

  if (employeeName && newUsername && getNewLibraryCopy && restrictions) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({
        employeeName,
        newUsername,
        newPassword,
        restrictions,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
