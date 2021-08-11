import React from "react";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import Alert from "./Alert";
import styles from "./CardsWrapper.module.scss";

export default function CardsWrapper(props) {
  const { data, error } = useFetch(props.url);

  return (
    <span className={styles.cardsWrapper}>
      <span className={styles.cards}>
        {Object.entries(props.userData).map(([key, val]) => (
          <Card key={key} title={key} className={styles.card} data={val} />
        ))}
      </span>
      {error ? (
        <Alert error={error} />
      ) : (
        <span>
          <Typography
            color="textSecondary"
            component="h2"
            variant="h4"
            className={styles.heading}
          >
            {`Posts by ${props.userName}`}
          </Typography>
          {!data ? (
            <Skeleton />
          ) : (
            <span className={styles.cards}>
              {data.map(el => (
                <Card
                  key={el.id}
                  className={styles.card}
                  data={{ title: el.title, post: el.body }}
                />
              ))}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
