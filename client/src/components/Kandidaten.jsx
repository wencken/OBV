import React from "react";
import { inject, observer } from "mobx-react";
import WithAuthorisation from "./auth/WithAuthorisation";
import { ROLES } from "../constants";

const Kandidaten = ({ emailStore }) => {
  const { emails } = emailStore;

  return (
    <>
      <h2>This page can only be accessed by administrators.</h2>
      <>
        {emails.length > 0 ? (
          <ul>
            {emails.map(email => (
              <li key={email.id}>{email.email}</li>
            ))}
          </ul>
        ) : (
          <p>Geen kandidaten</p>
        )}
      </>
    </>
  );
};

const condition = authUser => authUser && authUser.roles.includes(ROLES.admin);

export default inject(`emailStore`)(
  WithAuthorisation(condition)(observer(Kandidaten))
);
// export default inject(`emailStore`)(observer(Kandidaten));
