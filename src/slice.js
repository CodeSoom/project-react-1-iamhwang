import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFields: {
    email: 'tester@example.com',
    password: '',
  },
<<<<<<< HEAD
  searchWord: '',
=======
>>>>>>> setting for develop environment
};

const reducers = {
  requestLogin(state, { payload: password }) {
<<<<<<< HEAD
=======
    console.log(password);
>>>>>>> setting for develop environment
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        password,
      },
    };
  },

<<<<<<< HEAD
  changeSearchWord(state, { payload: searchWord }) {
    return {
      ...state,
      searchWord,
    };
  },
=======
>>>>>>> setting for develop environment
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

<<<<<<< HEAD
export const {
  requestLogin,
  changeSearchWord,
=======

export const {
  requestLogin,
>>>>>>> setting for develop environment
} = actions;

export default reducer;
