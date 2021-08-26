import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import styles from "./UserList.module.scss";

export default function UserList({ visibleUsers }) {
  const { avatars } = useSelector((state) => state.users);

  return (
    <List className={styles.rootList}>
      {visibleUsers.map((el) => {
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
                    avatars?.results?.[el.id - 1]?.picture?.thumbnail ||
                    "/static/images/avatar/1.jpg"
                  }
                />
              </ListItemAvatar>
              <span className={styles.info}>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
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
