// Process the deposit values inserted by the user
const frmDeposit = (depositFmr, depositIn, depositModal) => {

    depositFmr.addEventListener("submit", (e) => {      // Listen the deposit's form submit

        e.preventDefault();     // Prevents the form's automatic behaviour

        const lastDeposit = Number(localStorage.getItem("lastDeposit"));    // Get the last deposit
        let depositSum = Number(localStorage.getItem("depositSum"));        // Get the sum of the deposits
        depositSum += lastDeposit;                                          // Sum the deposits
        localStorage.setItem("depositSum", depositSum);                     // Save the sum of the the deposits

        const depositValue = Number(depositIn.value);   // Get the deposit's value

        localStorage.setItem("lastDeposit", depositValue);      // Save the deposit

        depositIn.value = "";       // Clean the input
        depositModal.close();       // Close the modal after the submit event        

    });

};

export default frmDeposit;      // Export the deposit's form function