import { createSlice } from "@reduxjs/toolkit";

import fetchData from "../utils/fetchData";

const initialUsersState = {
  loadingUsers: null,
  usersError: null,
  avatars: null,
  fetchedUsers: null,
  users: null,
  currentUserName: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    setLoadingUsers(state, action) {
      state.loadingUsers = action.payload.loading;
    },
    setUsersError(state, action) {
      state.usersError = action.payload.error;
    },
    setUsers(state, action) {
      state.fetchedUsers = action.payload.users;
      state.users = action.payload.users;
    },
    setAvatars(state, action) {
      state.avatars = action.payload.avatars;
    },
    setCurrentUserName(state, { payload }) {
      state.currentUserName = payload.name;
    },
    filterUsers(state, { payload }) {
      state.users = state.fetchedUsers.filter(({ email, name, username }) => {
        return (
          `${email}${name}${username}`
            .toLowerCase()
            .indexOf(payload.inputVal.toLowerCase()) >= 0
        );
      });
    },
    sortUsers(state, { payload }) {
      if (/name|email|username/i.test(payload.selectVal)) {
        state.users = [...(state.users || state.fetchedUsers)].sort((a, b) =>
          a[payload.selectVal].localeCompare(b[payload.selectVal])
        );
      }
    },
  },
});

export const usersActions = usersSlice.actions;

export const fetchAvatars = () => async (dispatch) => {
  const avatarRes = await fetchData(
    "https://randomuser.me/api/?results=10&inc=picture&noinfo"
  );

  if (!avatarRes.error) {
    dispatch(usersActions.setAvatars({ avatars: avatarRes.data }));
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch(usersActions.setLoadingUsers({ loading: true }));
  const usersRes = await fetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch(usersActions.setLoadingUsers({ loading: false }));
  if (usersRes.error) {
    dispatch(
      usersActions.setUsersError({
        error: usersRes.error.message,
      })
    );
  } else {
    dispatch(usersActions.setUsers({ users: usersRes.data }));
    dispatch(fetchAvatars());
  }
};

export default usersSlice.reducer;
