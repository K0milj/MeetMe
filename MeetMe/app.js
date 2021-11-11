let body = document.getElementById('body');
let moon = document.getElementById('moon');
let right = document.querySelector('.right');
let sun = document.getElementById('sun');
let login = document.getElementById('login');
let signup = document.getElementById('signup');
let loginBtn = document.getElementById('login-btn');
let signupBtn = document.getElementById('signup-btn');
let text = document.getElementById('text');

moon.addEventListener('click', function(){
    body.style.backgroundColor = 'rgb(37, 37, 37)';
    right.style.backgroundColor = 'rgb(37, 37, 37)';
    text.style.color = 'rgb(37, 37, 37)';
    text.style.transition = '0.5s transform, rotate ease';
    text.style.transform = 'translateX(20px)';
    text.style.transform = 'rotate(270deg)';
    text.innerHTML = '<h1>Me<br/>Meet</h1>';
    text.style.fontSize = '50px';
    sun.style.display = 'block';
    moon.style.display = 'none';
})

sun.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
    right.style.backgroundColor = 'white';
    sun.style.display = 'none';
    moon.style.display = 'block';
    text.style.color = 'white';
    text.style.transition = '0.5s transform, rotate ease';
    text.style.transform = 'translateX(-20px)';
    text.style.transform = 'rotate(0deg)';
    text.innerHTML = '<h1>Meet<br/>Me</h1>';
})

loginBtn.addEventListener('click', function(){
    login.style.display = 'none';
    signup.style.display = 'flex';
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'block';
})

signupBtn.addEventListener('click', function(){
    login.style.display = 'flex';
    signup.style.display = 'none';
    loginBtn.style.display = 'block';
    signupBtn.style.display = 'none';
})