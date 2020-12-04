import { aritmatika } from '../fungsi';

describe('fungsi', () => {
  test('2 + 2 is four', () => {
    expect(aritmatika(2, 2, 'tambah')).toBe(4);
    expect(aritmatika(2, 2, 'kurang')).toBe(0);
    expect(aritmatika(2, 2, 'kali')).toBe(4);
    expect(aritmatika(2, 2, 'bagi')).toBe(1);
    expect(aritmatika()).toBe(0);
  });
});
