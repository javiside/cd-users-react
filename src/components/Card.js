import React from "react";
import {
  Card as MUCard,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";

import styles from "./Cards.module.scss";

export default function Card({ data, title }) {
  return (
    <MUCard className={styles.card}>
      <CardHeader title={title} />
      <CardContent>
        {Object.entries(data).map(([key, val]) => {
          const aRef = {
            email: `mailto:${val}`,
            phone: `tel:${val}`,
            website: `//${val}`,
          };
          const ASpan = aRef[key] ? "a" : "span";
          const element = (
            <>
              <span className={styles[key]}>{`${key} `}</span>
              <ASpan href={aRef[key]}>{val}</ASpan>
            </>
          );

          return (
            <Typography key={key} color="textSecondary">
              {element}
            </Typography>
          );
        })}
      </CardContent>
    </MUCard>
  );
}
