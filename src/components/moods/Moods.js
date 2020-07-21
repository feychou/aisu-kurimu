import React from "react";
import { Planet } from "react-kawaii";

import styles from "./Moods.module.css";

const moodTypes = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko"
];

export default function Moods() {
  return (
    <div className={styles.Moods}>
      {moodTypes.map(mood => (
        <span className={styles.MoodWrapper}>
          <Planet
            className={styles.Mood}
            color="#fad201"
            mood={mood}
            size={70}
          />
        </span>
      ))}
    </div>
  );
}