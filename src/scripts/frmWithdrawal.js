// Process the withdrwals made by the user
const frmWithdrawal = (withdrawalFmr, withdrawalIn, withdrawalModal, withdrawalOut, balanceOut) => {

    withdrawalFmr.addEventListener("submit", (e) => {       // Listen the withdrawal's form submit

        e.preventDefault();     // Prvents the form's automatic behaviour

        const withdrawalValue = Number(withdrawalIn.value);     // Get the withdrawal's value

        localStorage.setItem("lastWithdrawal", withdrawalValue);    // Save the withdrawal

        const lastWithdrawal = Number(localStorage.getItem("lastWithdrawal"));   // Get the last withdrawal
        let withdrawalSum = Number(localStorage.getItem("withdrawalSum"));      // Get the sum of the withdrawals
        withdrawalSum += lastWithdrawal;                                         // Sum the withdrawals
        localStorage.setItem("withdrawalSum", withdrawalSum);                   // Save the sum of the withdrawals

        const depositTotal = Number(localStorage.getItem("depositSum"));    // Get the total of deposits from localStorage

        // Process the balance value and write it
        const balanceTotal = depositTotal - withdrawalSum;
        balanceOut.innerHTML = balanceTotal;

        withdrawalOut.innerHTML = lastWithdrawal;   // Write the last withdrawal  

        withdrawalIn.value = "";    // Clean the input
        withdrawalModal.close();    // Close the modal after the submit event

    });

};

export default frmWithdrawal;       // Export the withdrawal's form function