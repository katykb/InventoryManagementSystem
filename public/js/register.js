const signupFormHandler = async (event) => {
  event.preventDefault();

  const employeeName = document.querySelector("#name-signup").value.trim();
  const newUsername = document.querySelector("#username-signup").value.trim();
  const newPassword = documen.querySelector("#password-signup").value.trim();
  const restrictions = document
    .querySelector("#restrictions-signup")
    .value.trim();

  if (employeeName && newUsername && restrictions) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({
        newUsername,
        newPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("failed to sign up");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
