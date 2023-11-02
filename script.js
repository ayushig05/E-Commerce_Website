let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let contacts = document.querySelector(".footer");
let service = document.querySelector(".our-services");
let mainpg = document.querySelector(".main");
let discount = document.querySelector(".discount-news");

function home() {
    mainpg.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    contacts.style.display = "block";
    service.style.display = "flex";
    discount.style.display = "block";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    document.getElementById("home").style.color = "rgb(138, 110, 71)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

function category() {
    mainpg.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    document.getElementById("category").style.color = "rgb(138, 110, 71)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

function blogs() {
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    document.getElementById("blog").style.color = "rgb(138, 110, 71)";
    document.getElementById("home").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

function services() {
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "flex";
    discount.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    document.getElementById("services").style.color = "rgb(138, 110, 71)";
    document.getElementById("home").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("blog").style.color = "black";
}

function contact() {
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "block";
    discount.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    document.getElementById("contact").style.color = "rgb(138, 110, 71)";
    document.getElementById("home").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("blog").style.color = "black";
}

let x;
function show(x) {
    let newImg = document.getElementsByClassName("newimg");
    console.log(x.src);
    newImg.src = x.src;
    console.log(newImg.src);
    document.querySelector(".cart").style.display = "flex";
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
}

function addcart() {
    alert("Added to cart");
    location.reload();
}

let loginForm = document.getElementById("login-form");
let signupForm = document.getElementById("signup-form");
let loginButton = document.getElementById("form-open");
let loginLink = document.getElementById("login");
let signupLink = document.getElementById("signup");

function form() {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
loginButton.addEventListener("click", form);
signupLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("contact").style.color = "black";
});

function check() {
    let email_login = document.formfill.Email.value;
    let password_login = document.formfill.Password.value;
    let result = document.querySelector(".result");
    result.innerHTML = "";
    if (email_login === "") {
        result.innerHTML = "Enter your Email or Phone Number*";
        return false;
    }
    else if (password_login === "") {
        result.innerHTML = "Enter your Password*";
        return false;
    } 
    else if (password_login.length < 6) {
        result.innerHTML = "Password must be at least 6 characters*";
        return false;
    }
    return true;
}

function validation() {
    let username = document.FillForm.Name.value;
    let email = document.FillForm.Email.value;
    let password = document.FillForm.Password.value;
    let confirmPassword = document.FillForm.CPassword.value;
    let resultElement = document.querySelector(".result");
    resultElement.innerHTML = "";
    if (username === "") {
        resultElement.innerHTML = "Enter Name*";
        return false;
    } 
    else if (username.length < 6) {
        resultElement.innerHTML = "Name must be at least six characters*";
        return false;
    } 
    else if (email === "") {
        resultElement.innerHTML = "Enter your Email or Phone Number*";
        return false;
    } 
    else if (password === "") {
        resultElement.innerHTML = "Enter your Password*";
        return false;
    } 
    else if (password.length < 6) {
        resultElement.innerHTML = "Password must be at least 6 characters*";
        return false;
    } 
    else if (confirmPassword === "") {
        resultElement.innerHTML = "Enter Confirm Password*";
        return false;
    } 
    else if (confirmPassword !== password) {
        resultElement.innerHTML = "Password doesn't match*";
        return false;
    }
    return true;
}

function togglePassword(icon) {
    const passwordField = icon.previousElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

loginLink.addEventListener("click", function form(x) {
    x.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
});
signupLink.addEventListener("click", function form(x) {
    x.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});