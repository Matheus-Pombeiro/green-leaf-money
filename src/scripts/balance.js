// Process the balance's calc and write the balance, deposit and withdrawal to user
const balance = (balanceOut, depositOut, withdrawalOut) => {

    // Get the total of deposits and withdrawals from localStorage
    const depositTotal = Number(localStorage.getItem("depositSum"));
    const withdrawalTotal = Number(localStorage.getItem("withdrawalSum"));

    // Get the latest deposit and withdrawal from localStorage
    const lastDeposit = localStorage.getItem("lastDeposit");
    const lastWithdrawal = localStorage.getItem("lastWithdrawal");

    // Process the balance value and write it
    const balanceTotal = depositTotal - withdrawalTotal;
    balanceOut.innerHTML = balanceTotal;

    // Write the latest deposit and withdrawal
    depositOut.innerHTML = lastDeposit;
    withdrawalOut.innerHTML = lastWithdrawal;

};

export default balance;     // Export the balance function