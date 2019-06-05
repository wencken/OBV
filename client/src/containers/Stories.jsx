import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Vote from "../components/Vote";

const Stories = ({ storyStore }) => {
  const { stories } = storyStore;

  return (
    <>
      <PageHeader title={`All Stories`} />
      <>
        {stories.length > 0 ? (
          <div>
            {stories.map(story => (
              <Vote
                key={story.id}
                story={story}
                onVote={storyStore.voteStory}
              />
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
