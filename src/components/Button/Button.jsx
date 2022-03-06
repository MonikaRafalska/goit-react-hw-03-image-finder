import React from "react";
import styles from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.button}>
    Load more
    </button>
  );
};

export default Button;
