// Process the deposit values inserted by the user
const frmDeposit = (depositFmr, depositIn, depositModal, depositOut, balanceOut) => {

    depositFmr.addEventListener("submit", (e) => {      // Listen the deposit's form submit

        e.preventDefault();     // Prevents the form's automatic behaviour

        const depositValue = Number(depositIn.value);   // Get the deposit's value

        localStorage.setItem("lastDeposit", depositValue);      // Save the deposit

        const lastDeposit = Number(localStorage.getItem("lastDeposit"));    // Get the last deposit
        let depositSum = Number(localStorage.getItem("depositSum"));        // Get the sum of the deposits
        depositSum += lastDeposit;                                          // Sum the deposits
        localStorage.setItem("depositSum", depositSum);                     // Save the sum of the the deposits

        const withdrawalTotal = Number(localStorage.getItem("withdrawalSum"));      // Get the total of withdrawals from localStorage

        // Process the balance value and write it
        const balanceTotal = depositSum - withdrawalTotal;
        balanceOut.innerHTML = balanceTotal;

        depositOut.innerHTML = lastDeposit;     // Write the last deposit

        depositIn.value = "";       // Clean the input
        depositModal.close();       // Close the modal after the submit event        

    });

};

export default frmDeposit;      // Export the deposit's form function