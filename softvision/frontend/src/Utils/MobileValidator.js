export const validateMobileNumber = (mobileNumber) => {
    const mobileNumberPattern = /^[6-9]\d{9}$/;
    return(mobileNumberPattern.test(mobileNumber))
  }

 