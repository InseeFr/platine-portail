/**
 * minLength Val
 * @param  value
 * @param  minLength
 * @return
 */
const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

/**
 * maxLength Val
 * @param  value
 * @param  minLength
 * @return
 */
const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
};

/**
 * Check to confirm that field is required
 *
 * @param  value
 * @return
 */
const requiredValidator = (value, required) => {
  return !(required && value.trim() === '');
};

/**
 * Email validation
 *
 * @param value
 * @return
 */
const emailValidator = value => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const validationCaseFunctions = {
  isEmail: emailValidator,
  minLength: minLengthValidator,
  maxLength: maxLengthValidator,
  isRequired: requiredValidator,
};

const validate = (value, rules) =>
  Object.keys(rules).reduce(
    (bool, key) => bool && validationCaseFunctions[key](value, rules[key]),
    true
  );

export default validate;
