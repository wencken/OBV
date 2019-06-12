import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import Vote from "../components/Vote";

const Stories = ({ uiStore, storyStore }) => {
  const { currentCity } = uiStore;

  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  return (
    <>
      <h2>All Stories</h2>
      {filteredStories.length > 0 ? (
        <div>
          {filteredStories.map(story => (
            <Vote key={story.id} story={story} onVote={storyStore.voteStory} />
          ))}
        </div>
      ) : (
        <p>No stories</p>
      )}
    </>
  );
};

Stories.propTypes = {
  storyStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`, `storyStore`)(observer(Stories));
