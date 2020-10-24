import { loanRate } from "../constants/common";

export const validatePhone = (phone) => {
  return /^[+]*[(]{0,1}[0-9]{8,16}[)]{0,1}[-\s./0-9]*$/g.test(phone);
};
export const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
export const checkEligibility = (yoe, ms, amount) => {
  if (yoe >= 5 && ms >= 70000) return amount < 500000 ? amount : 500000;
  else if (yoe >= 3 && ms >= 50000) return amount < 300000 ? amount : 300000;
  else return false;
};
export const checkEligibilityBusiness = (yr, amount) => {
  if (yr >= 5000000) return amount < 700000 ? amount : 700000;
  else if (yr > 3000000) return amount < 500000 ? amount : 500000;
  else return false;
};
export const calcEMI = (amount, year) => {
  let monthlyInterest = loanRate / (100 * 12);
  let installments = year * 12;
  let temp = Math.pow(1 + monthlyInterest, installments);
  return (
    (amount * monthlyInterest * temp) / (temp - 1) || amount / installments || 0
  );
};
