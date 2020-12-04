import React from 'react';
import { shallow } from 'enzyme';
import Comp from '../component';

jest.mock('../../../components/elements/TextField', () => jest.fn(() => null));
jest.mock('../../../utils/convCapitalize', () => ({
  convCapitalize: (string) => string.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}));
window.alert = jest.fn();

describe('component', () => {
  let props = {
    classes: {
      root: {}
    }
  };
  test('render correctly', () => {
    const comp = shallow(<Comp {...props} />);
    const inst = comp.instance();
    expect(inst.state.username).toBe('Silahkan Isi');
    inst._handleChangeUsername({ target: { value: 'Rizaldi' } });
    expect(inst.state.username).toBe('Rizaldi');
    inst._handleCheck();
    expect(window.alert).toHaveBeenCalled();

    comp.setProps({ username: 'Putra' });
    expect(inst.state.username).toBe('Putra');

    comp.find('button').simulate('click');

    comp.unmount();
  });
});
