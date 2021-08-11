import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./Header.module.scss";

export default function Header({ user, selected, handleSort, searchVal, handleSearch }) {
  const Wrapper = user ? Link : Typography;
  return (
    <div className={styles.appBar}>
      <AppBar position="static">
        <Toolbar className={styles.toolBar}>
          <Typography className={styles.title} variant="h1" noWrap>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator="›"
              classes={{ root: styles.breadcrumbs, separator: styles.separator }}
            >
              <Wrapper className={styles.link} to="/">
                Users
              </Wrapper>
              {user && <Typography>{user}</Typography>}
            </Breadcrumbs>
          </Typography>
          {!user && (
            <span className={styles.actions}>
              <div className={styles.search}>
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: styles.inputRoot,
                    input: styles.input,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={searchVal}
                  onChange={handleSearch}
                />
              </div>
              <FormControl className={styles.formControl}>
                <InputLabel>Sort by</InputLabel>
                <Select value={selected} onChange={handleSort}>
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
