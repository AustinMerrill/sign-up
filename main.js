//1.target value
const form =document.querySelector('form');
console.log(form);
const firstNameInputField=document.querySelector('.firstName'); // target the html
const showErrorMessage =document.querySelector('.showErrorMessage');
const lastNameErrorMessage=document.querySelector('.lastNameErrorMessage');
const emailErrorMessage=document.querySelector('.emailErrorMessage');
const passwordErrorMessage =document.querySelector('.passwordErrorMessage');
//2.functions

//3.eventListeners
form.addEventListener('submit', function(e){
   e.preventDefault();
    console.log('event fired');
    // create a const `firstName` set equal to the user input in the first name input field
    // const firstNameInputValue = firstNameInputField.value;
    // console.log(firstNameInputValue);
    const firstNameInputValueAlternateOption = form['firstName'].value;
    console.log(firstNameInputValueAlternateOption);
    const lastNameInputValue = form['last'].value;
    console.log(lastNameInputValue);
    const emailInputValue =form['email'].value;
    console.log(emailInputValue);
    const passwordInputValue =form['password'].value;
    console.log(passwordInputValue);

    // create a conditional for each input to make sure user submitted content
    //1 check if firstName input is an empty string

 if (firstNameInputValueAlternateOption == "") {
    
    showErrorMessage.innerHTML='<h1>First Name cannont be empty</h1>'
    // add an error class
 }else {
     showErrorMessage.innerHTML='<h1></h1>';
     // remove an error class
 }

 if (lastNameInputValue== ""){
    lastNameErrorMessage.innerHTML='<h2>Last Name cannot be empty<h2>'
 } else{
    lastNameErrorMessage.innerHTML='<h2></h2>'
     console.log('doesnt work');
 }

const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passOrFail = re.test(emailInputValue)
if(passOrFail){
    console.log('great email')
    emailErrorMessage.innerHTML = '<h1></h1>';
} else{
    console.log("please enter valid email")
    emailErrorMessage.innerHTML = '<h1>Please provide a valid email</h1>';
}
console.log(passwordInputValue);
// imagine use enters in "rsv"
// !rsv
const rePassword = /!/;
const passwordPassOrFail = rePassword.test(passwordInputValue)

if(passwordInputValue ==""){
    passwordErrorMessage.innerHTML ='<h2>Password cannot be empty</h2>';
} else if (!passwordPassOrFail) {
    passwordErrorMessage.innerHTML ='<h2>Password must include !</h2>';
} else {
    console.log('great password')
    passwordErrorMessage.innerHTML ='<h2></h2>';
}

 // check if email is empty string
 // if empty add error  -> error
 // if else if (is email valid) -> error 
 // else remove an error

})