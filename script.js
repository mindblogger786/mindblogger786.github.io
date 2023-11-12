// Funciton for button to redirect on Contact Section
function Contact(){
    window.location.href="#contact";
}

// Javascript for Collapsible functioning

var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    }

// Javascript for Skills Bar Number

let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 80){
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 25)

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 65){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 30)

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 30){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 55)

let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if(counter4 == 85){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 23)

let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
    if(counter5 == 55){
        clearInterval();
    }
    else{
        counter5 += 1;
        number5.innerHTML = counter5 + "%";
    }
}, 35)

let number6 = document.getElementById("number6");
let counter6 = 0;
setInterval(() => {
    if(counter6 == 75){
        clearInterval();
    }
    else{
        counter6 += 1;
        number6.innerHTML = counter6 + "%";
    }
}, 25)

// Alert after submitting the form
function showAlert(){
    alert("Thank you for submitting the form.");
}
