export const validateEmail = (email: string): boolean => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);

};
export const validateName = (name: string): boolean => {

  const nameRegex = /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/;

  if (!nameRegex.test(name)) {
    return false;
  }
  return true;
};
export const validateMobileNumber = (mobileNumber: string): boolean => {

  const mobileRegex = /^[5-9]\d{9}$/;

  if (!mobileNumber.match(mobileRegex)) {
    return false;
  } else {
    return true;
  }
};
