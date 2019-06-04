import React from "react";
import { inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Home = ({ storyStore }) => {
  const { stories } = storyStore;

  return (
    <>
      <Navigation />
      <PageHeader title={`De Derde Boodschap`} />
      {stories.length > 0 ? (
        <ul>
          {stories.map(story => (
            <p> {story.description}</p>
          ))}
        </ul>
      ) : (
        <p>No stories</p>
      )}
    </>
  );
};

export default inject(`storyStore`)(observer(Home));
