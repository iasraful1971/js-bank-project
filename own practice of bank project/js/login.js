document.getElementById('submit-button').addEventListener('click' , function(){
    //console.log('clicked');

    // get email info 

    const emailField = document.getElementById('email-input');
    // console.log(emailField.value);
    const emailFieldValue = emailField.value;
    // console.log(emailFieldValue);

    //get passworld info

    const passwordField = document.getElementById('password-input');
     const passwordFieldValue = passwordField.value;
     //console.log(passwordFieldValue);

    //  condition 
    if(emailFieldValue === "iasraful107@gmail.com" && passwordFieldValue === "demo"){
        window.location.href = "bank.html"
    }
    else{
      const errMessage = document.getElementById('error');
      errMessage.innerText = "You are not user. bye bye"
    }

});