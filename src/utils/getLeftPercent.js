export const getLeftPercent = (target_amount, amount_raised) => {
  if (target_amount <= 0) {
    throw new Error("Target amount must be greater than 0.");
  } else if (amount_raised < 0) {
    throw new Error("Raised amount can not be negative.");
  }

  const percentage = (amount_raised / target_amount) * 100;
  return percentage.toFixed(2);
};
