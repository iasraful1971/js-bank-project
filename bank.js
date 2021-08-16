// // handle deposite button event 
// document.getElementById('deposite-button').addEventListener('click' , function(){
//     //console.log('deposte button is clicked');
//     //get amount of deposited
//     const depositeInput = document.getElementById('deposite-input');
//     const newdepositeAmountText =  depositeInput.value;
//     const newdepositeAmount = parseFloat(newdepositeAmountText);
//     //console.log(depositeAmount);
    
//     const depositeTotal = document.getElementById('deposite-total');


//     const previousDepositeAmountText = depositeTotal.innerText;
//     const previousDepositeAmount = parseFloat(previousDepositeAmountText);
//     const  newDepsiteTotal =previousDepositeAmount + newdepositeAmount;



//         depositeTotal.innerText = newDepsiteTotal;

//     // update deposite total 
//     const balenceTotal =  document.getElementById('balence-total');
//      const balenceTotalText = balenceTotal.innerText;
//      const previousBalenceTotal = parseFloat(balenceTotalText);
//      const newBalenceTotal = previousBalenceTotal + newDepsiteTotal;
//      balenceTotal.innerText = newBalenceTotal;


//         // clear deposite input field 
//         depositeInput.value = '';


// });

// // handle withdraw event handler 
// document.getElementById('withdraw-button').addEventListener('click' , function(){
//         const withdrawInput = document.getElementById('withdraw-input');
//         const withdrawAmountText = withdrawInput.value;
//         const newWithdrawAmount = parseFloat(withdrawAmountText);
//         //  set withdraw total 
//         const withdrawTotal =  document.getElementById('withdraw-total');
//             const previousWithdrawText = withdrawTotal.innerText;
//             const previousWithdraw = parseFloat(previousWithdrawText);

//             const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
//             withdrawTotal.innerText = newWithdrawTotal;


//             // update balance 
//             const balenceTotal =  document.getElementById('balence-total');
//             const previousBalenceText = balenceTotal.innerText;
//             const previousBalence = parseFloat(previousBalenceText);
//             const newBalenceTotal = previousBalence - newWithdrawTotal;
//             balenceTotal.innerText = newBalenceTotal;



//             // clear withdeaw input 
//             withdrawInput.value = '';
// });


function getInputValue(inputId){
    const inputField =  document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue =  parseFloat(inputAmountText);
    // clear deposite input 
    inputField.value =''
    return amountValue;
}

function updateTotalField(totalFieldId, depositAmount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + depositAmount;

}

function getCurrentBalence(){
    const balenceTotal= document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    return previousBalenceTotal;
}
function updateBalence(depositAmount , isAdd){
    const balenceTotal= document.getElementById('balence-total');

    const previousBalenceTotal = getCurrentBalence();
    if(isAdd === true){
        balenceTotal.innerText = previousBalenceTotal + depositAmount;
    }
    
    else{
        balenceTotal.innerText = previousBalenceTotal - depositAmount;
    }
}



// deposit button handler 
document.getElementById('deposit-button').addEventListener('click' , function(){

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0 ){
        updateTotalField('deposit-total',depositAmount);
        // upate balence total 
        updateBalence(depositAmount , true); 
    }
   
});

// withdraw button event handler 

document.getElementById('withdraw-button').addEventListener('click' ,function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const curreBalence = getCurrentBalence();

    if(withdrawAmount > 0 && withdrawAmount <= curreBalence){
        updateTotalField('withdraw-total' , withdrawAmount)
        updateBalence(withdrawAmount , false);   
    }
    if(withdrawAmount > curreBalence){
        console.log('insufficient balence');
    }
});


