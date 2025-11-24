document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

const username = document.getElementById('userName').value;
const password = document.getElementById('password').value;

// Credenciales de prueba
if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    } else {
        alert('Invalid credentials.');
    }
});