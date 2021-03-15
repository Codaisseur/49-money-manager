// src/store/account/actions.js
export const deposit = amountToDeposit => ({
  type: "account/deposit",
  payload: amountToDeposit,
});
