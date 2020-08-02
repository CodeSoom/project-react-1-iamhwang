import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFields: {
    email: 'tester@example.com',
    password: '',
  },
  searchWord: '',
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
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  requestLogin,
  changeSearchWord,
} = actions;

export default reducer;
