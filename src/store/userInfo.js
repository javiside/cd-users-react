import { createSlice } from "@reduxjs/toolkit";

import fetchData from "../utils/fetchData";

const initialUserInfoState = {
  loadingInfo: null,
  infoError: null,
  usersInfo: {},
};

const userInfoSlice = createSlice({
  name: "info",
  initialState: initialUserInfoState,
  reducers: {
    setLoadingInfo(state, action) {
      state.loadingInfo = action.payload.loading;
    },
    setInfoError(state, action) {
      state.infoError = action.payload.error;
    },
    setUserInfo(state, { payload }) {
      state.usersInfo[payload.id] = payload.userInfo;
    },
  },
});

export const infoActions = userInfoSlice.actions;

export const fetchUserInfo = (id) => async (dispatch) => {
  dispatch(infoActions.setLoadingInfo({ loading: true }));
  const usersRes = await fetchData(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch(infoActions.setLoadingInfo({ loading: false }));

  if (usersRes.error) {
    dispatch(
      infoActions.setInfoError({
        error: usersRes.error.message,
      })
    );
  } else {
    dispatch(infoActions.setUserInfo({ userInfo: usersRes.data, id }));
  }
};

export default userInfoSlice.reducer;
