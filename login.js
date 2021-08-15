//submit buton handler
document.getElementById('login-submit').addEventListener('click', function(){
    // console.log('clicked');
    //get email value
    const userEmailField = document.getElementById('user-email');
    const getEmailValue = userEmailField.value;

    //get passworld value
    const userPassworldField =  document.getElementById('user-password');
    const getPasswordValue = userPassworldField.value;

    //console.log(getEmailValue, getPasswordValue);
    //check email and password
    if(getEmailValue === 'demo@gmail.com' && getPasswordValue === 'demo'){
        console.log('valid user');
        window.location.href= 'banking.html'
    }
    else{
        console.log('invalid user are you');
    }
    
})

