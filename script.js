const authForm = document.getElementById("authForm");
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const submitBtn = document.getElementById("submitBtn");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");
const errorMessage = document.getElementById("errorMessage");
const togglePassword = document.getElementById("togglePassword");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const authCard = document.querySelector(".auth-card");

let isRegister = false;

switchBtn.addEventListener("click", () => {
    isRegister = !isRegister;

    errorMessage.textContent = "";

    if (isRegister) {
        authCard.classList.add("register-mode");

        formTitle.textContent = "Create Account";
        formSubtitle.textContent = "Create a new account";
        submitBtn.textContent = "Register";

        switchText.innerHTML =
            'Already have an account? <button type="button" id="switchBtn">Login</button>';
    } else {
        authCard.classList.remove("register-mode");

        formTitle.textContent = "Welcome Back";
        formSubtitle.textContent = "Login to your account";
        submitBtn.textContent = "Login";

        switchText.innerHTML =
            'Don\'t have an account? <button type="button" id="switchBtn">Register</button>';
    }

    document.getElementById("switchBtn").addEventListener("click", switchForm);
});

function switchForm() {
    isRegister = !isRegister;

    errorMessage.textContent = "";

    if (isRegister) {
        authCard.classList.add("register-mode");

        formTitle.textContent = "Create Account";
        formSubtitle.textContent = "Create a new account";
        submitBtn.textContent = "Register";

        switchText.innerHTML =
            'Already have an account? <button type="button" id="switchBtn">Login</button>';
    } else {
        authCard.classList.remove("register-mode");

        formTitle.textContent = "Welcome Back";
        formSubtitle.textContent = "Login to your account";
        submitBtn.textContent = "Login";

        switchText.innerHTML =
            'Don\'t have an account? <button type="button" id="switchBtn">Register</button>';
    }

    document.getElementById("switchBtn").addEventListener("click", switchForm);
}

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
    }
});

authForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (isRegister) {
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            showError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            showError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            showError("Passwords do not match.");
            return;
        }

        showSuccess("Registration successful! 🎉");
    } else {
        if (email === "" || password === "") {
            showError("Please enter your email and password.");
            return;
        }

        showSuccess("Login successful! 👋");
    }
});

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "#ff5c7a";
}

function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "#35d07f";
}