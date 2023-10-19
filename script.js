let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
console.log(card);
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
    document.getElementById("contact").style.color = "rgb(138, 110, 71)";
    document.getElementById("home").style.color = "black";
    document.getElementById("category").style.color = "black";
    document.getElementById("services").style.color = "black";
    document.getElementById("blog").style.color = "black";
}

function show(image) {
    let newImg = document.getElementsByClassName("newimg");
    console.log(image);
    newImg.scr = image.src;
    document.querySelector(".cart").style.display = "flex";
    mainpg.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    contacts.style.display = "none";
    service.style.display = "none";
    discount.style.display = "none";
}

function addcart() {
    alert("Added to cart");
    location.reload();
}