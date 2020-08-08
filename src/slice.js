import { createSlice } from '@reduxjs/toolkit';

import {
  crawlingUrl,
} from './services/api';

const initialState = {
  loginFields: {
    email: '',
    password: '',
  },
  searchWord: '',
  searchResults: [
    {
      no: '',
      price: '',
      redgt: '',
      title: '',
      region: '',
      view: '',
    }
  ]
};

const reducers = {
  requestLogin(state, { payload: password }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        password,
      },
    };
  },

  changeSearchWord(state, { payload: searchWord }) {
    return {
      ...state,
      searchWord,
    };
  },

  wantedInstrument(state, { payload: searchResults }) {
    return {
      ...state,
      searchResults,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  requestLogin,
  changeSearchWord,
  wantedInstrument,
} = actions;

export function findInstrument(searchWord) {
  return async (dispatch) => {
    const { data } = await crawlingUrl();
    console.log(data);
    
    dispatch(wantedInstrument(data));
  };
}

export default reducer;
