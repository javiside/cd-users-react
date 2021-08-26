import React from "react";

import LoadingWrapper from "./LoadingWrapper";
import Card from "./Card";

import styles from "./Cards.module.scss";

export default function Info({ loadingInfo, infoError, info }) {
  return !Object.entries(info)?.length ? (
    <LoadingWrapper loading={loadingInfo} error={infoError} />
  ) : (
    <span className={styles.cardsWrapper}>
      <span className={styles.cards}>
        {Object.entries(info).map(([key, val]) => (
          <Card key={key} title={key} className={styles.card} data={val} />
        ))}
      </span>
    </span>
  );
}
