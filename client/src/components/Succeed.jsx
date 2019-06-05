import React from "react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import { ROUTES } from "../constants";

const Succeed = () => {
  return (
    <>
      <Navigation />
      <PageHeader title={`Thank you for sharing your story!`} />
      <a href={ROUTES.stories}>Read more stories</a>
    </>
  );
};
export default Succeed;
