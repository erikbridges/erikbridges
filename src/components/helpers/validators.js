import validator from "validator";

export const checkNames = name => {
  // Check if empty
  const emptyLength = validator.isEmpty(name);
  if (emptyLength) {
    return {
      error: true,
      errorMessage:
        "Oops looks like your form field is incomplete. Please fill out all the information to continue."
    };
  }
  // Check if length is correct
  const correctLength = validator.isLength(name, { min: 3, max: 50 });
  if (!correctLength) {
    return {
      error: true,
      errorMessage:
        "Your input fields cannot be shorter than 3 characters or longer than 50 charcters."
    };
  }
  return {
    error: false
  };
};

export const checkEmail = async email => {
  // Valid Email Check
  const emailValid = validator.isEmail(email);
  if (!emailValid) {
    return {
      error: true,
      errorMessage: "Please enter in a valid email address"
    };
  }
  // Check if the email is disposible.
  try {
    const emailValidate = await fetch(
      `https://www.validator.pizza/email/${email}`
    );
    const { disposable } = await emailValidate.json();
    if (disposable) {
      return {
        error: true,
        errorMessage:
          "No disposible emails are allowed. Please submit a valid email address."
      };
    }
    return {
      error: false
    };
  } catch (e) {
    return {
      error: true,
      errorMessage: "Something went wrong. Please try again."
    };
  }
};

export const checkMessageField = field => {
  const correctMessageLength = validator.isLength(field, {
    min: 10,
    max: 3000
  });
  if (!correctMessageLength) {
    return {
      error: true,
      errorMessage:
        "Your message is too long or too short. Please have a min of 10 characters and a max of 3000 characters."
    };
  }
  return {
    error: false
  };
};
