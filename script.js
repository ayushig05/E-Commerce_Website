let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let contacts = document.querySelector(".footer");
let service = document.querySelector(".our-services");
let mainpg = document.querySelector(".main");
let discount = document.querySelector(".discount-news");

let loginForm = document.getElementById("login-form");
let signupForm = document.getElementById("signup-form");
let loginButton = document.getElementById("form-open");
let loginLink = document.getElementById("login");
let signupLink = document.getElementById("signup");
let send = document.querySelector(".result");

function home() {
    showPage("home");
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    contacts.style.display = "block";
    service.style.display = "flex";
    discount.style.display = "block";
}

function category() {
    showPage("category");
}

function blogs() {
    showPage("blogs");
}

function services() {
    showPage("services");
}

function contact() {
    showPage("contact");
}

function showPage(page) {
    mainpg.style.display = page === "home" ? "flex" : "none";
    card.style.display = page === "category" ? "block" : "none";
    card2.style.display = page === "category" ? "block" : "none";
    blog.style.display = page === "blogs" ? "block" : "none";
    contacts.style.display = page === "contact" ? "block" : "none";
    service.style.display = page === "services" ? "flex" : "none";
    discount.style.display = page === "home" ? "block" : "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    updateNavStyles(page);
}

function updateNavStyles(activePage) {
    const navItems = ["home", "category", "blogs", "services", "contact"];
    navItems.forEach(item => {
        const element = document.getElementById(item);
        if (element) {
            element.style.color = item === activePage ? "rgb(138, 110, 71)" : "black";
        }
    });
}

let x;
function show(x) {
    let newImg = document.querySelector(".newimg");
    newImg.src = x.src;
    document.querySelector(".cart").style.display = "flex";
    showPage("none");
}

function addcart() {
    alert("Added to cart");
    location.reload();
}

function form() {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    showPage("none");
}
loginButton.addEventListener("click", form);
signupLink.addEventListener("click", form);

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
    if (email_login !== "" || password_login !== "") {
        result.textContent = "Your message has been sent!";
        window.alert("Your message has been sent!");
    }
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
    if (email_login !== "" || password_login !== "") {
        result.textContent = "Your message has been sent!";
        window.alert("Your message has been sent!");
    }
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

loginLink.addEventListener("click", function form(event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
});
signupLink.addEventListener("click", function form(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});