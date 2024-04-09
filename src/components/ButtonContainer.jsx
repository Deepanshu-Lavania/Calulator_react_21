import React from "react";
import styles from "../components/BtnCon.module.css";

export default function ButtonContainer({onButtonClick}) {
  const buttonNames = [
    "AC",
    "%",
    "DEL",
    "-",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((curElem) => {
        return <button className={styles.buttons} onClick={onButtonClick}>{curElem}</button>;
      })}
    </div>
  );
}
