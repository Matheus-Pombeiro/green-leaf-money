// Settings to reset the values of the balance, deposit and withdrawal outputs and theirs localStorage datas
const resetBtn = (resetButton, balanceOut, depositOut, withdrawalOut) => {

    resetButton.addEventListener("click", () => {       // Listen the clcki on the reset button

        // Remove the latest deposits and withdrwals
        localStorage.removeItem("lastDeposit");
        localStorage.removeItem("lastWithdrawal");

        // Remove the sums of deposits and withdrawals
        localStorage.removeItem("depositSum");
        localStorage.removeItem("withdrawalSum");

        // Clean the page's outputs
        balanceOut.innerHTML = "";
        depositOut.innerHTML = "";
        withdrawalOut.innerHTML = "";

    });

};

export default resetBtn;    // Export the value reset function