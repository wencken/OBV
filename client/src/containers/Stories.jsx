import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Stories = ({ storyStore }) => {
  return (
    <>
      <PageHeader title={`All Stories`} />
      <Navigation />
      <>
        {storyStore.stories.length > 0 ? (
          <ul>
            {storyStore.stories.map(({ id, description, city }) => (
              <li key={id}>
                {description} - {city}
              </li>
            ))}
          </ul>
        ) : (
          <p>No stories</p>
        )}
      </>
    </>
  );
};

Stories.propTypes = {
  storyStore: PropTypes.observableObject.isRequired
};

export default inject(`storyStore`)(observer(Stories));
