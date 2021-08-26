import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

import LoadingWrapper from "./LoadingWrapper";
import Card from "./Card";

import styles from "./Cards.module.scss";

export default function Posts({ loadingPosts, postsError, posts }) {
  const currentUserName = useSelector((state) => state.users.currentUserName);

  return (
    <>
      <Typography
        color="textSecondary"
        component="h2"
        variant="h4"
        className={styles.heading}
      >
        {`Posts by ${currentUserName || "..."}`}
      </Typography>
      {!posts?.length ? (
        <LoadingWrapper loading={loadingPosts} error={postsError} />
      ) : (
        <span className={styles.cards}>
          {posts.map((el) => (
            <Card
              key={el.id}
              className={styles.card}
              data={{ title: el.title, post: el.body }}
            />
          ))}
        </span>
      )}
    </>
  );
}
