import React from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import PageHeader from "../PageHeader";
import styles from "./Login.module.css";

const Login = ({ uiStore, history }) => {
  const emailInput = React.createRef();
  const pwdInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    uiStore.login(emailInput.current.value, pwdInput.current.value).then(() => {
      history.push(ROUTES.home);
    });
  };

  return (
    <>
      <PageHeader title={`Inloggen`} />
      <form onSubmit={handleSubmit} className={styles.layout}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input type="email" name="email" id="email=" ref={emailInput} />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password
          <input type="password" name="password" id="password" ref={pwdInput} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default inject("uiStore")(withRouter(Login));
