import {
  REGEX_PHONE_NUMBER_VALIDATION,
  REGEX_NUMBER_ONLY,
  REGEX_ALPHABET_ONLY,
  REGEX_PASSWORD,
  REGEX_EMAIL_VALIDATION,
  REGEX_START_WITH_ZERO,
  REGEX_START_WITH_ZERO_EIGHT
} from '../constants';

export default function validateInput(value, rules, customMessages) {
  let message = '';

  for (let idx = 0; idx < rules.length; idx++) {
    if (rules[idx] === 'required' && !value) {
      message = customMessages[idx] ? customMessages[idx] : 'Bagian ini harus diisi';
      break;
    } else if (rules[idx] === 'alphabet' && !REGEX_ALPHABET_ONLY.test(value)) {
      message = customMessages[idx]
        ? customMessages[idx]
        : 'Hanya boleh terdiri dari alphabet saja';
      break;
    } else if (rules[idx] === 'phone' && !REGEX_PHONE_NUMBER_VALIDATION.test(value)) {
      message = customMessages[idx] ? customMessages[idx] : 'No. Telepon tidak valid';
      break;
    } else if (rules[idx] === 'email' && !REGEX_EMAIL_VALIDATION.test(value)) {
      message = customMessages[idx]
        ? customMessages[idx]
        : 'Email anda salah atau belum terdaftar pada sistem';
      break;
    } else if (rules[idx] === 'number' && !REGEX_NUMBER_ONLY.test(value)) {
      message = customMessages[idx] ? customMessages[idx] : 'Masukan input hanya nomor saja';
      break;
    } else if (rules[idx] === 'password' && value.length < 8) {
      message = customMessages[idx] ? customMessages[idx] : 'Minimal 8 karakter';
      break;
    } else if (rules[idx] === 'password' && !REGEX_PASSWORD.test(value)) {
      message = customMessages[idx]
        ? customMessages[idx]
        : 'Minimal 8 karakter terdiri dari Huruf dan Angka';
      break;
    } else if (rules[idx] === 'minphone' && value.length < 9) {
      message = customMessages[idx] ? customMessages[idx] : 'Minimal 9 Angka';
      break;
    } else if (rules[idx] === 'minhandphone' && value.length < 10) {
      message = customMessages[idx] ? customMessages[idx] : 'Minimal 11 Angka';
      break;
    } else if (rules[idx] === 'maxhandphone' && value.length > 13) {
      message = customMessages[idx] ? customMessages[idx] : 'Maksimal 13 angka ';
      break;
    } else if (rules[idx] === 'minparticipant' && value >= 76) {
      message = customMessages[idx] ? customMessages[idx] : 'Minimal 11 Angka';
      break;
    } else if (rules[idx] === 'startzeronumber' && !REGEX_START_WITH_ZERO.test(value)) {
      message = customMessages[idx] ? customMessages[idx] : 'Harus diawali dengan angka 0';
      break;
    } else if (rules[idx] === 'startzeroeightnumber' && !REGEX_START_WITH_ZERO_EIGHT.test(value)) {
      message = customMessages[idx] ? customMessages[idx] : 'Harus diawali dengan angka 0';
      break;
    } else {
      message = '';
      break;
    }
  }

  return message;
}
