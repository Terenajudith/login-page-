document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save user information in localStorage
    localStorage.setItem("registeredName", name);
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    document.getElementById("message").innerText = "Registration Successful! You can now log in.";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
        document.getElementById("message").innerText = "Login Successful!";
    } else {
        document.getElementById("message").innerText = "Invalid email or password!";
    }
});
