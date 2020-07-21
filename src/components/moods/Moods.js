import React from "react";
import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

export default function Moods({ items, action }) {
  return (
    <div className={styles.Moods}>
      {items.map(mood => (
        <span
          className={`${styles.MoodWrapper} ${
            mood.isSelected ? styles.MoodWrapperSelected : ""
          }`}
          onClick={() => action(mood.id)}
        >
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