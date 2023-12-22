// Deposit's modal programming logic
const modalDeposit = (depositBtn, depositModal, depositClose) => {

    depositBtn.addEventListener("click", () => {    // Listen the click on the modal's btn

        depositModal.showModal();       // Open the deposit's modal 

    });

    depositClose.addEventListener("click", () => {      // Listen the click on the close btn

        depositModal.close();       // Close the deposit's modal

    });

};

export default modalDeposit;        // Export the deposit modal's function