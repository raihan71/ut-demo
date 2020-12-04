import { ACTIONS } from '../../constants';

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

export default function reducer(state = initialState, action) {
  const {
    type,
    myDocument,
    meta,
    params
  } = action;
  switch (type) {
    case ACTIONS.CLEAR_STATE:
      return {
        ...initialState,
      };
    case ACTIONS.SET_DATA_MY_DOCUMENT:
      return {
        ...state,
        myDocument,
        meta
      };
    case ACTIONS.SET_PARAMS_MY_DOCUMENT:
      return {
        ...state,
        params
      };
    default:
      return state;
  }
}
