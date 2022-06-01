const loginFormHandler = async (event) => {
  event.preventDefault();

  const userId = document.querySelector("#user-name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (userId && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userId, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
