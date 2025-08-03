const users = [
  { id: 1, email: "john.doe@example.com", password: "123456" },
  { id: 2, email: "jane.smith@example.com", password: "password123" },
  { id: 3, email: "test.user@example.com", password: "qwerty" },
];

document.addEventListener("DOMContentLoaded", () => {
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));

  //open the modal when click
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("loginError").classList.add("d-none");
      document.getElementById("emailInput").value = "";
      document.getElementById("passwordInput").value = "";
      loginModal.show();
    });
  }

  //validate the form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("emailInput").value.trim();
      const password = document.getElementById("passwordInput").value;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        loginModal.hide();
        alert("Logged in successfully!");
      } else {
        const errorDiv = document.getElementById("loginError");
        errorDiv.textContent = "Invalid email or password.";
        errorDiv.classList.remove("d-none");
      }
    });
  }

  // like icon logic
  document.querySelectorAll(".like-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const currentUser = localStorage.getItem("currentUser");

      if (currentUser) {
        icon.classList.toggle("active");
      } else {
        loginModal.show();
      }
    });
  });
});
