import { ACTIONS } from '../constants';

const initialState = {
  isLoading: false,
  isLoadingSubmit: false,
  isLoadingFilter: false,
  isLoadingDownload: false,
};

export default function reducer(state = initialState, action) {
  const {
    DONE_LOADING,
    DONE_LOADING_DOWNLOAD,
    DONE_LOADING_FILTER,
    DONE_LOADING_SUBMIT,
    LOADING,
    LOADING_DOWNLOAD,
    LOADING_FILTER,
    LOADING_SUBMIT,
  } = ACTIONS;
  const { type } = action;

  switch (type) {
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case DONE_LOADING_DOWNLOAD:
      return {
        ...state,
        isLoadingDownload: false
      };
    case DONE_LOADING_FILTER:
      return {
        ...state,
        isLoadingFilter: false
      };
    case DONE_LOADING_SUBMIT:
      return {
        ...state,
        isLoadingSubmit: false
      };
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_DOWNLOAD:
      return {
        ...state,
        isLoadingDownload: true
      };
    case LOADING_FILTER:
      return {
        ...state,
        isLoadingFilter: true
      };
    case LOADING_SUBMIT:
      return {
        ...state,
        isLoadingSubmit: true
      };
    default:
      return state;
  }
}
