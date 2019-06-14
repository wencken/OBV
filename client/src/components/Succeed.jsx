import React from "react";
import { ROUTES } from "../constants";
import styles from "./Succeed.module.css";

const Succeed = () => {
  return (
    <>
      <h2 className={"filterTitle_big"}>
        Thank you for <span className={"text_dark"}>sharing</span> your{" "}
        <span className={"text_line"}>story</span> !
      </h2>
      <img src={`../../assets/img/drol2.png`} alt="" />
      <a href={ROUTES.stories} className={styles.btn_black}>
        Read more stories
      </a>
    </>
  );
};
export default Succeed;
