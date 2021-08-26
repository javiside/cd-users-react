import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users";
import infoReducer from "./userInfo";
import postsReducer from "./userPosts";

const store = configureStore({
  reducer: {
    users: usersReducer,
    info: infoReducer,
    posts: postsReducer,
  },
});

export default store;
