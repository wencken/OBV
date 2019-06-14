import React from "react";
import { ROUTES } from "../constants";

const Succeed = () => {
  return (
    <>
      <h2>Thank you for sharing your story!</h2>
      <a href={ROUTES.stories}>Read more stories</a>
    </>
  );
};
export default Succeed;
