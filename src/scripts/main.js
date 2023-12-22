// Import srcipts
import themeSwitching from "./theme.js";
import modalDeposit from "./modalDeposit.js";           // Deposit's modal
import modalWithdrawal from "./modalWithdrawal.js";     // Withdrawal's modal

// Get the references from HTML document

// Modal references

// Deposit
const depositBtn = document.querySelector("[data-deposit-btn]");            // Btn
const depositModal = document.querySelector("[data-deposit-modal]");        // Modal
const depositClose = document.querySelector("[data-deposit-close]");        // Close btn
const depositFmr = document.querySelector("[data-deposit-frm]");            // Form
const depositIn = document.querySelector("[data-deposit-in]");              // Input

// Withdrawal
const withdrawalBtn = document.querySelector("[data-withdrawal-btn]");            // Btn
const withdrawalModal = document.querySelector("[data-withdrawal-modal]");        // Modal
const withdrawalClose = document.querySelector("[data-withdrawal-close]");        // Close btn
const withdrawalFmr = document.querySelector("[data-withdrawal-frm]");            // Form
const withdrawalIn = document.querySelector("[data-withdrawal-in]");              // Input

// Theme Switching reference
const theme = document.querySelector("[data-theme]");       // Theme button


// Call the imported scripts
themeSwitching(theme);                                              // Theme switching
modalDeposit(depositBtn, depositModal, depositClose);               // Deposit's modal
modalWithdrawal(withdrawalBtn, withdrawalModal, withdrawalClose);   // Withdrawal's modal