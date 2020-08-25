import { createSlice } from '@reduxjs/toolkit';

import {
  crawlingData,
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
    },
  ],
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

  resultData(state, { payload: searchResults }) {
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
  resultData,
} = actions;

export function searchData(searchWord) {
  return async (dispatch) => {
    const { data } = await crawlingData();

    dispatch(resultData(data));
  };
}

export default reducer;
