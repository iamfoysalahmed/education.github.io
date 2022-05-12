
$(document).ready(function(){
    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });
    
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    // get values
    const userNameValue = username.value
    const passwordValue = password.value

    if(userNameValue === ""){
        setErrorFor(username, "Username cannot be blank");
    }else{
        setsuccessFor(username);
    }
    if(userNameValue.slice(0,1) === "_" | userNameValue.slice(0,1) === "*" | userNameValue.slice(0,1) === "#"){
        setErrorFor(username, "Invalid username");
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Password should be atleast 8 characters long");
    }else{
        setsuccessFor(password);
    }


}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";
}

function setsuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
