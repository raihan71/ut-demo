export default function validateInput(value, rules = []) {
  let message = '';

  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    message = 'Invalid email address';
  }

  for (let idx = 0; idx < rules.length; idx++) {
    if (rules[idx] === 'required' && !value) {
      message = 'Harus diisi';
      break;
    }
    else {
      break;
    }
  }
  return message;
}
