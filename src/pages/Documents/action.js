import { ACTIONS } from '../../constants';
import fetch from '../../utils/fetch';
import { SERVICES } from '../../configs';

export function fetchMyDocument(token, params) {
  return dispatch => {
    const options = {
      method: 'GET',
      url: `${SERVICES.DUMMY_API}`,
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    dispatch(loadingAction());

    fetch(options)
      .then(res => {
        dispatch(setDocumentByNik(res.data, res.meta));
        dispatch(doneLoadingAction());
      })
      .catch(() => {
        dispatch(setDocumentByNik([], {}));
        dispatch(doneLoadingAction());
      });
  };
}

function setDocumentByNik(myDocument, meta) {
  return {
    type: ACTIONS.SET_DATA_MY_DOCUMENT,
    myDocument,
    meta
  };
}


export function paramsMyDocument(params) {
  return {
    type: ACTIONS.SET_PARAMS_MY_DOCUMENT,
    params
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function doneLoadingAction() {
  return { type: ACTIONS.DONE_LOADING };
}


export function clearState() {
  return { type: ACTIONS.CLEAR_STATE };
}
