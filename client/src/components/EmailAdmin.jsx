import React from "react";
import { inject, observer } from "mobx-react";
import WithAuthorisation from "./auth/WithAuthorisation";
import { ROLES } from "../constants";

import PageHeader from "./PageHeader";
import Navigation from "./Navigation";

const EmailAdmin = ({ emailStore }) => {
  const { emails } = emailStore;

  return (
    <>
      <Navigation />
      <PageHeader title={`Kandidaten`} />
      <p>This page can only be accessed by administrators.</p>
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

// const condition = authUser => authUser && authUser.roles.includes(ROLES.admin);

// export default inject(`emailStore`)(
//   WithAuthorisation(condition)(observer(EmailAdmin))
// );
export default inject(`emailStore`)(observer(EmailAdmin));
