// handle deposite button event 
document.getElementById('deposite-button').addEventListener('click' , function(){
    //console.log('deposte button is clicked');
    //get amount of deposited
    const depositeInput = document.getElementById('deposite-input');
    const newdepositeAmountText =  depositeInput.value;
    const newdepositeAmount = parseFloat(newdepositeAmountText);
    //console.log(depositeAmount);
    
    const depositeTotal = document.getElementById('deposite-total');


    const previousDepositeAmountText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    const  newDepsiteTotal =previousDepositeAmount + newdepositeAmount;



        depositeTotal.innerText = newDepsiteTotal;

    // update deposite total 
    const balenceTotal =  document.getElementById('balence-total');
     const balenceTotalText = balenceTotal.innerText;
     const previousBalenceTotal = parseFloat(balenceTotalText);
     const newBalenceTotal = previousBalenceTotal + newDepsiteTotal;
     balenceTotal.innerText = newBalenceTotal;


        // clear deposite input field 
        depositeInput.value = '';


});

// handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click' , function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);
        //  set withdraw total 
        const withdrawTotal =  document.getElementById('withdraw-total');
            const previousWithdrawText = withdrawTotal.innerText;
            const previousWithdraw = parseFloat(previousWithdrawText);

            const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
            withdrawTotal.innerText = newWithdrawTotal;


            // update balance 
            const balenceTotal =  document.getElementById('balence-total');
            const previousBalenceText = balenceTotal.innerText;
            const previousBalence = parseFloat(previousBalenceText);
            const newBalenceTotal = previousBalence - newWithdrawTotal;
            balenceTotal.innerText = newBalenceTotal;



            // clear withdeaw input 
            withdrawInput.value = '';
});
