import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { usersActions, fetchUsers } from "../store/users";

import LoadingWrapper from "../components/LoadingWrapper";
import UserList from "../components/UserList";

const Users = () => {
  const { usersError, loadingUsers, users, currentUserName, fetchedUsers } =
    useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetchedUsers) {
      dispatch(fetchUsers());
    }
  }, [dispatch, fetchedUsers]);

  useEffect(() => {
    if (currentUserName) {
      dispatch(usersActions.setCurrentUserName({ name: null }));
    }
  }, [dispatch, currentUserName]);

  return !users?.length ? (
    <LoadingWrapper loading={loadingUsers} error={usersError} users />
  ) : (
    <UserList visibleUsers={users} />
  );
};
export default Users;
