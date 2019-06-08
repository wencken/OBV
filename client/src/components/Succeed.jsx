import React from "react";
// import PageHeader from "../components/PageHeader";
import { ROUTES } from "../constants";

const Succeed = () => {
  return (
    <>
      {/* <PageHeader title={"Tell us your story"} /> */}
      <h2>Thank you for sharing your story!</h2>
      <a href={ROUTES.stories}>Read more stories</a>
    </>
  );
};
export default Succeed;
