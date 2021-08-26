import { createSlice } from "@reduxjs/toolkit";

import fetchData from "../utils/fetchData";

const initialPostsState = {
  loadingPosts: null,
  postsError: null,
  usersPosts: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    setLoadingPosts(state, action) {
      state.loadingPosts = action.payload.loading;
    },
    setPostsError(state, action) {
      state.postsError = action.payload.error;
    },
    setUserPosts(state, { payload }) {
      state.usersPosts[payload.id] = payload.posts;
    },
  },
});

export const postsActions = postsSlice.actions;

export const fetchUsersPosts = (id) => async (dispatch) => {
  dispatch(postsActions.setLoadingPosts({ loading: true }));
  const usersRes = await fetchData(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  dispatch(postsActions.setLoadingPosts({ loading: false }));

  if (usersRes.error) {
    dispatch(
      postsActions.setPostsError({
        error: usersRes.error.message,
      })
    );
  } else {
    dispatch(postsActions.setUserPosts({ posts: usersRes.data, id }));
  }
};

export default postsSlice.reducer;
