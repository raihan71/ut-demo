export const aritmatika = (a = 0, b = 0, c = 'tambah') => {
  switch(c) {
    case 'tambah':
      return a + b;
    case 'kurang':
      return a - b;
    case 'bagi':
      return a / b;
    case 'kali':
      return a * b;
  }
};

