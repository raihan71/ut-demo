import { fetchMyDocument } from '../action';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SERVICES } from '../../../configs';
import configureStore from '../../../store/configureStore';
const store = configureStore();

describe('action', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  test('working', () => {
    mock.onGet(SERVICES.DUMMY_API).replyOnce(200, { data: [], meta: []});
    store.dispatch(fetchMyDocument('A', 'A'));

    mock.onGet(SERVICES.DUMMY_API).replyOnce(500, {});
    store.dispatch(fetchMyDocument('A', 'A'));
  });
});
