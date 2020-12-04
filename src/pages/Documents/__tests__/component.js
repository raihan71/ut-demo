import React from 'react';
import { shallow } from 'enzyme';
import Comp from '../component';

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
    inst._handleChangeUsername({ target: { value: 'Rizaldi' } });
    expect(inst.state.username).toBe('Rizaldi');
    inst._handleCheck();
    expect(window.alert).toHaveBeenCalled();

    comp.setProps({ username: 'Putra' });
    expect(inst.state.username).toBe('Putra');

    comp.unmount();
  });
});
