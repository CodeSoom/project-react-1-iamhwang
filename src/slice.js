import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFields: {
    email: 'tester@example.com',
    password: '',
  },
};

const reducers = {
  requestLogin(state, { payload: password }) {
    console.log(password);
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        password,
      },
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
} = actions;

export default reducer;
