function BACK(){
    window.location.replace('index.html');
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'demo' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        // Dummy user information
        var points = 100; // Dummy points value
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }

    if (username === 'HARRIS' && password === 'HARRIS111') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        
        var points = 150; // points value
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
    if (username === 'MAX' && password === 'MAX222') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
     
        var points = 125;
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }

    if (username === 'JACK' && password === 'JACK333') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
     
        var points = 100;
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
    if (username === 'ABI' && password === 'ABI444') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
     
        var points = 125;
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }

    if (username === 'GINGER' && password === 'GINGER555') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        
        var points = 100; // points value
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }

    if (username === 'JAMES' && password === 'JAMES666') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        
        var points = 125; // points value
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }

    if (username === 'ANTONYO' && password === 'ANTONYO777') {
        document.getElementById('message').textContent = 'Login successful. Redirecting...';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        
        var points = 10; // points value
        document.getElementById('pointsDisplay').textContent = points;
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
});
