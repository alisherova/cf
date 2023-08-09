export const getLeftDate = (lastDay = "") => {
  const currentDate = new Date();
  const splittedDate = lastDay.split("T")[0];
  const pureDate = new Date(splittedDate);
  const timeDifference = Math.abs(pureDate - currentDate);
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysRemaining;
};
