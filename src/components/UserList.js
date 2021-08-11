import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./UserList.module.scss";
import useFetch from "../hooks/useFetch";

export default function UserList({ data }) {
  const { data: avatarData, error } = useFetch(
    "https://randomuser.me/api/?results=10&inc=name,gender,picture&noinfo"
  );
  return (
    <List className={styles.rootList}>
      {data.map(el => {
        return (
          <li key={el.id}>
            <ListItem
              alignItems="flex-start"
              button
              component={Link}
              to={`/user/${el.id}`}
              className={styles.listItem}
            >
              <ListItemAvatar className={styles.avatar}>
                <Avatar
                  alt={el.name}
                  src={
                    avatarData && !error
                      ? avatarData.results[el.id - 1].picture.thumbnail
                      : "/static/images/avatar/1.jpg"
                  }
                />
              </ListItemAvatar>
              <span className={styles.info}>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      {el.username}
                    </Typography>
                  }
                />

                <ListItemText primary={el.email} className={styles.email} />
              </span>
            </ListItem>
            <Divider variant="inset" className={styles.inset} />
          </li>
        );
      })}
    </List>
  );
}
