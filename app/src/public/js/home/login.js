"use strict";

// console.log("hello");
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);
function login(){
    console.log(id.value);
    console.log(psword.value);
}