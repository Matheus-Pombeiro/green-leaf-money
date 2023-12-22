// Process the withdrwals made by the user
const frmWithdrawal = (withdrawalFmr, withdrawalIn, withdrawalModal) => {

    withdrawalFmr.addEventListener("submit", (e) => {       // Listen the withdrawal's form submit

        e.preventDefault();     // Prvents the form's automatic behaviour

        const lastWthdrawal = Number(localStorage.getItem("lastWithdrawal"));   // Get the last withdrawal
        let withdrawalSum = Number(localStorage.getItem("withdrawalSum"));      // Get the sum of the withdrawals
        withdrawalSum += lastWthdrawal;                                         // Sum the withdrawals
        localStorage.setItem("withdrawalSum", withdrawalSum);                   // Save the sum of the withdrawals

        const withdrawalValue = Number(withdrawalIn.value);     // Get the withdrawal's value

        localStorage.setItem("lastWithdrawal", withdrawalValue);    // Save the withdrawal

        withdrawalIn.value = "";    // Clean the input
        withdrawalModal.close();    // Close the modal after the submit event

    });

};

export default frmWithdrawal;       // Export the withdrawal's form function