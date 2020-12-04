export function toRupiah(values) {
  let reverse = values && values.toString().split('').reverse().join(''),
    convr = reverse && reverse.match(/\d{1,3}/g),
    conversion = convr && convr.join('.').split('').reverse().join('');
  return conversion;
}
