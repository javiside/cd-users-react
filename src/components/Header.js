import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Typography,
  InputBase,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import { usersActions } from "../store/users";

import styles from "./Header.module.scss";

export default function Header() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("name");

  const { fetchedUsers, currentUserName } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  const handleSort = (e) => {
    setSelectVal(e.target.value);
  };

  useEffect(() => {
    if (fetchedUsers) {
      dispatch(usersActions.filterUsers({ inputVal }));
      dispatch(usersActions.sortUsers({ selectVal }));
    }
  }, [dispatch, fetchedUsers, inputVal, selectVal]);

  useEffect(() => {
    if (fetchedUsers) {
      dispatch(usersActions.sortUsers({ selectVal }));
    }
  }, [dispatch, fetchedUsers, selectVal]);

  const Wrapper = currentUserName ? Link : Typography;
  return (
    <div className={styles.appBar}>
      <AppBar position="static">
        <Toolbar className={styles.toolBar}>
          <Typography className={styles.title} variant="h1" noWrap>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator="›"
              classes={{
                root: styles.breadcrumbs,
                separator: styles.separator,
              }}
            >
              <Wrapper className={styles.link} to="/">
                Users
              </Wrapper>
              {currentUserName && <Typography>{currentUserName}</Typography>}
            </Breadcrumbs>
          </Typography>
          {!currentUserName && (
            <span className={styles.actions}>
              <div className={styles.search}>
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: styles.inputRoot,
                    input: styles.input,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={inputVal}
                  onChange={handleSearch}
                />
              </div>
              <FormControl className={styles.formControl}>
                <InputLabel>Sort by</InputLabel>
                <Select value={selectVal} onChange={handleSort}>
                  <MenuItem value={"name"}>Name</MenuItem>
                  <MenuItem value={"username"}>UserName</MenuItem>
                  <MenuItem value={"email"}>Email</MenuItem>
                </Select>
              </FormControl>
            </span>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
