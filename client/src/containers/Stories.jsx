import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Stories = ({ storyStore }) => {
  const { stories } = storyStore;

  return (
    <>
      <Navigation />
      <PageHeader title={`All Stories`} />

      <>
        {stories.length > 0 ? (
          <div>
            {stories.map(story => (
              <ul key={story.id}>
                <li>{story.description}</li>
                <li>{story.mood ? story.mood.name : ""}</li>
                <li>{story.city}</li>
                <input
                  type="submit"
                  value={story.rate}
                  onClick={story.ratings}
                />
              </ul>
            ))}
          </div>
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
