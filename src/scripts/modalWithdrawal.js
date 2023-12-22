// Withdrawal's modal programming logic
const modalWithdrawal = (withdrawalBtn, withdrawalModal, withdrawalClose) => {

    withdrawalBtn.addEventListener("click", () => {     // Listen the click on the modal's btn

        withdrawalModal.showModal();    // Open the withdrawal's modal

    });

    withdrawalClose.addEventListener("click", () => {   // Listen the click on the modal's btn

        withdrawalModal.close();    // Close the withdrawal's modal

    });

};

export default modalWithdrawal;     // Export the withdrawal's modal