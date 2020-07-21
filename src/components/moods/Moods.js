import React from "react";
import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

export default function Moods({ items }) {
  return (
    <div className={styles.Moods}>
      {items.map(mood => (
        <span className={styles.MoodWrapper}>
          <Planet
            className={styles.Mood}
            color="#fad201"
            mood={mood.id}
            size={70}
          />
        </span>
      ))}
    </div>
  );
}