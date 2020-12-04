import { convCapitalize } from '../convCapitalize';
describe('convCapitalize', () => {
  let ux = 1;
  beforeAll(() => {
    ux = 2;
  });
  test('working', () => {
    ux++;
    expect(ux).toBe(3);
    expect(convCapitalize('sharing session gea')).toBe('Sharing Session Gea');
  });
  test('must be 4', () => {
    ux++;
    expect(ux).toBe(4);
  });
});
