//JavaScript Code by Beable


const profiles = [
    {id: 1, first_name: "Blessing", last_name: "Adeika", email: "beable@codeoutlaws.com"},
    {id: 2, first_name: "Favour", last_name: "Adegoke", email: "favour@codeoutlaws.com"},
    {id: 3, first_name: "Faith", last_name: "Adegoke", email: "faith@codeoutlaws.com"},
    {id: 4, first_name: "Dunmoye", last_name: "Ayobami", email: "ayobami@codeoutlaws.com"},
    {id: 5, first_name: "Abisola", last_name: "Agiode", email: "abisola@codeoutlaws.com"},
    {id: 6, first_name: "Adefola", last_name: "Alabi", email: "adefola@codeoutlaws.com"},
    {id: 7, first_name: "Deji", last_name: "Gbayegun", email: "deji@codeoutlaws.com"},
    {id: 8, first_name: "Ovie", last_name: "Uwanoghor", email: "oviking@codeoutlaws.com"}
];

const showSlid = document.querySelectorAll('.showSlide'),
    dot = document.querySelectorAll('.dot');
const slidLength = showSlid.length;

let counter =0;

let timer = setInterval(autoslide, 3000);
function autoslide() {
    if (counter == slidLength ) {
        counter = 0;
    }
    plusSlides();
}

function plusSlides() {
    if (counter < slidLength) {   
        console.log(counter);
        slidecount(counter);
        counter++;
    }

    else{
        counter++;
    }
}

function currentSlide() {
    if (counter >= 0) {
        --counter;
        slidecount(counter);
    }
    else{
        counter--;
    }
}


function slidecount(counter){
    for(let i = 0; i < slidLength; i++){
        showSlid[i].style.display = "none";
        dot[i].classList.remove('active');
        dot[i].style.borderColor = "white";
    }

    showSlid[counter].style.display = "block";
    dot[counter].style.borderColor = "#e36bae";
};


function formValidation(){
    var email = document.beableForm.email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if(atposition < 1 || dotposition < atposition +2 || dotposition +2 >= email.length){
        alert ("Kinldy enter a valid e-mail address");
        return false;
    }
    
    var phno = document.beableForm.phno.value;

    if(isNaN(phno)){
        alert ("Phone number is requred to be a numeric value")
        return false;
    }
    if(phno.length < 11){
        alert("Phone number should not be less than 11")
        return false;
    }
};






