import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

const initialState = {
  myDocument: [],
  meta: {},
  params: {
    page: 1,
    status: 0,
    sort: 0,
    search: ''
  }
};

describe('reducer', () => {
  it('working', () => {
    expect(reducer(undefined, { type: ACTIONS.CLEAR_STATE } )).toStrictEqual(initialState);
    expect(reducer(undefined, {
      type: ACTIONS.SET_DATA_MY_DOCUMENT, myDocument: [], meta: []
    } )).toStrictEqual({ ...initialState, myDocument: [], meta: []});
    expect(reducer(undefined, { type: ACTIONS.SET_PARAMS_MY_DOCUMENT, params: 'zaldi' } )).toStrictEqual({ ...initialState, params: 'zaldi' });
    expect(reducer(undefined, { type: undefined } )).toStrictEqual(initialState);
  });
});
