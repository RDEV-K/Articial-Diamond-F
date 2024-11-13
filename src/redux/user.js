import { createSlice } from '@reduxjs/toolkit';
import { SIGN_UP_PENDING, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from '../APIs/actionTypes';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    errors: {},
    loading: false,
  },
  reducers: {
    [SIGN_UP_PENDING]: (state) => {
      state.loading = true;
      state.errors = {};
    },
    [SIGN_UP_FULFILLED]: (state, action) => {
      state.loading = false;
      state.user = {
        ...state.user,
        ...action.payload
      };
    },
    [SIGN_UP_REJECTED]: (state, action) => {
      state.loading = false;
      state.errors = {
        ...state.errors,
        ...action.payload
      }; // Use payload for error message
    },
  },
});

// export const { SIGN_UP_PENDING, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } = userSlice.actions;
export default userSlice.reducer;