/*console.log(`Hello`);
console.log("I like pizza!");
window.alert('This is an alert');
//this a command/*...*/
//document.getElementById("myh1").textContent = "hello";
//document.getElementById("myp").textContent = "I like pizza";
//PRINT 
/*let x;
x = 25;
let price = 10.99;
console.log(price);
console.log(`i am ${x} years old`);
console.log(typeof x);
let firstName = "Bro";
console.log(firstName);
let email = "abc@gmail.com";
console.log(`your mail is ${email}.`);*/
//BOOLEANS{}
/*let online = true;
console.log(typeof online);
console.log(`your bro is online? ${online}`);*/
/*let fullname = "Prabha";
let a
ge = 25;
let student = true;
document.getElementById("p1").textContent = `your full name is ${fullname}`;
document.getElementById("p2").textContent = `your age is ${age}`;
document.getElementById("p3").textContent = `Enrolled${student}`;*/


//Arithemetic{}
/*let students = 30;
students +=1;
console.log(students)
OPERATOR PRECEDENCE;
1.Paranthesis()
2.exponents
3.multiply&div&modulo
4.add&sub
*/
//HOW TO GET USER INPUT
//1.WIONDOWS PROMPT
//2.HTML BOX
/*let username;
username = window.prompt("what your name");
console.log(username);*/
//document.getElementById("mysumbit").onclick = function() {
   /* let username = document.getElementById("mytext").value;
    console.log(username);
}*/
//TYPE CONVERSION{}
/*let age = window.prompt("How old are you?");
age = Number(age);
age = age+1;
console.log(age,typeof age);*/
/*let x = 20;
let y = "apple";
let z = "poxxa";
y = Number(y);
z = Boolean(z);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/
//const= a variable cant be changed
//const PI = 3.14;//like this a creating a variable cant be changed.
/*const dbutton = document.getElementById("dbutton");
const rbutton = document.getElementById("rbutton");
const ibutton = document.getElementById("ibutton");
const countlabel = document.getElementById("countlabel");
let count = 0;
ibutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}
dbutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}
rbutton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}*/
//Math{}
/*console.log(Math.PI);
console.log(E);*/
/*let randomNo = Math.floor(Math.random()*6);
console.log(randomNo);*/
//RANDOM NUMBER GENERATOR
/*const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNo;
myButton.onclick = function(){
    randomNo = Math.floor(Math.random() * max)+min;
    myLabel.textContent = randomNo;
}*/
/*const myText = document.getElementById("myText");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;
mysubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
if(age>=25){
    resultElement.textContent = `You are old enough to enter this site`;
}
else{
   resultElement.textContent= `you must be 18+`;
}
}
//like the normal if else conditions{}*/
//CHECK BOX{}
/*const myCheckBox = document.getElementById("myCheckBox");
const visabtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypal");
const mySubmit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subresult.textContent = `You are subscribed`;
    }
    else{
        subresult.textContent = `You are not subscribed`;
    }

    if(visabtn.checked){
        payresult.textContent = "You selected Visa";
    }
    else if(masterCardBtn.checked){
        payresult.textContent = "You selected MasterCard";
    }
    else if(paypal.checked){
        payresult.textContent = "You selected PayPal";
    }
    else {
        payresult.textContent = "You didn't select a payment method";
    }
}*/
// TERINARY OPERATOR SHORTCUT TO IF else
/*let age = 25;
let mg = age>=18?"your an major":"your an minor";
console.log(mg);
*/
/*
/*let day = 33;
switch(day){
    case 1 :
        console.log("good crt");
        break;
    case 2:
        console.log("oh no");
        break;
    default:
        console.log("You r beautigul");
}*/
//
// STRINNGS{}
/*let userName = "Prabha";
console.log(userName.charAt(0));
console.log(userName.indexOf("p"));
startswith
includes
padStart,padend*/
/*const fullName = "Bro Code";
let firstName = fullName.slice(0,3);
let lastName = fullName.slice(4,8);
console.log(fullName);
console.log(lastName);*/
/*const email = "Bro1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);*/
//Method Calling = Calling one method after another in one continous line of code.
/*username  = window.prompt("Enter your username");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);*/
//LOGICAL OPERATORS and (&&) or(||) NOT(!)
//normal la if condition la use panrathu than.
//while loop as same as until the condition is true.
//for loop same
/*for(let i = 0;i<5;i++){
    console.log("i");
}*/
//FUNCTION = A section of reusable code.
//Declare the code  once , use it whenever you want.
//call the function to execute that code.
/*function happyBirthday(username,age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log(`you are ${age} years old`);
}
happyBirthday("BroCode",25);*/
/*function add(x,y){
    let result = x+y;
    return result;
}
function sub(x,y){
    return x-y;
}
console.log(add(2,3));
console.log(sub(3,4));*/
/*function iseven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(iseven(5));*/
// variable scope = (local vs global)
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value);

    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}
