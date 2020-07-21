import React from "react";
import { IceCream } from "react-kawaii";

import styles from "./IceCreamWrapper.module.css";

function IceCreamWrapper({ color }) {
  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={color} />
    </div>
  )
}

export default IceCreamWrapper;