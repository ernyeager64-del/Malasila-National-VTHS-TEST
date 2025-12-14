const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm[0].value.trim();
        const password = loginForm[1].value.trim();
        if(username === "student" && password === "1234"){
            loginMessage.textContent = "Login successful! Welcome, " + username;
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Invalid username or password!";
            loginMessage.style.color = "red";
        }
        loginForm.reset();
    });
}