document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const existingBtn = document.getElementById("existing");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");

  // Initially hide existing button
  existingBtn.style.display = "none";

  // Check if user exists in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) return;

    // Store in localStorage only if "Remember me" is checked
    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }

    alert(`Logged in as ${username}`);
  });

  // Handle login as existing user
  existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    }
  });
});
