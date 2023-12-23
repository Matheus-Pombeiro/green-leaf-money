// Opening and closing main's modal function
const modalMain = (modal, modalClose) => {

    window.addEventListener("load", () => {     // Listen the window's load

        modal.showModal();      // Show the modal

    });

    modalClose.addEventListener("click", () => {    // Listen the click on the close button

        modal.close();      // Close the modal

    });

};

export default modalMain;       // Export the Main's modal function