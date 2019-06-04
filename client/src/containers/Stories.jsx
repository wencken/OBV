import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Stories = ({ storyStore }) => {
  const { stories } = storyStore;
  console.log(stories);
  return (
    <>
      <Navigation />
      <PageHeader title={`All Stories`} />

      <>
        {stories.length > 0 ? (
          <ul>
            {stories.map(story => (
              <li key={story.id}>
                {story.description} - {story.mood ? story.mood.name : ""}
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
