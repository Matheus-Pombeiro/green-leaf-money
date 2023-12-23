// Process the balance's calc and write the balance, deposit and withdrawal to user
const balance = (balanceOut, depositOut, withdrawalOut) => {

    window.addEventListener("load", () => {

        // Get the total of deposits and withdrawals from localStorage
        const depositTotal = Number(localStorage.getItem("depositSum"));
        const withdrawalTotal = Number(localStorage.getItem("withdrawalSum"));

        // Get the latest deposit and withdrawal from localStorage
        const lastDeposit = Number(localStorage.getItem("lastDeposit"));
        const lastWithdrawal = Number(localStorage.getItem("lastWithdrawal"));

        // Process the balance value and write it
        const balanceTotal = depositTotal - withdrawalTotal;
        balanceTotal == 0 ? balanceOut.innerHTML = "" : balanceOut.innerHTML = `$ ${balanceTotal.toFixed(2)}`; 

        // Write the latest deposit and withdrawal
        depositOut.innerHTML = `$ ${(lastDeposit.toFixed(2))}`;
        withdrawalOut.innerHTML = `$ ${lastWithdrawal.toFixed(2)}`;

    });

};

export default balance;     // Export the balance function