import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import WithAuthorisation from "./auth/WithAuthorisation";
import { ROLES } from "../constants";
import StoryDetail from "./StoryDetail";

const StoryAdmin = ({ moodStore, storyStore }) => {
  const { stories } = storyStore;
  const descriptionInput = React.createRef();
  const moodInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storyStore.addStory({
      description: descriptionInput.current.value,
      moodId: moodInput.current.value
    });
    descriptionInput.current.value = "";
    moodInput.current.value = "";
  };

  return (
    <>
      <h2>This page can only be accessed by administrators.</h2>
      <>
        {stories.length > 0 ? (
          <ul>
            {stories.map(story => (
              <StoryDetail
                key={story.id}
                story={story}
                onUpdate={storyStore.updateStory}
                onDelete={storyStore.deleteStory}
              />
            ))}
          </ul>
        ) : (
          <p>No stories</p>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="mood">
            Mood:
            <select name="mood" id="mood" ref={moodInput}>
              {moodStore.moods.map(mood => (
                <option value={mood.id} key={mood.id}>
                  {mood.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="description">
            Question
            <input
              type="text"
              name="description"
              id="description"
              ref={descriptionInput}
            />
          </label>
          <input type="submit" value="add" />
        </form>
      </>
    </>
  );
};

StoryAdmin.propTypes = {
  storyStore: PropTypes.observableObject.isRequired
};

const condition = authUser => authUser && authUser.roles.includes(ROLES.admin);

export default inject(`moodStore`, `storyStore`)(
  WithAuthorisation(condition)(observer(StoryAdmin))
);
// export default inject(`moodStore`, `storyStore`)(observer(StoryAdmin));
