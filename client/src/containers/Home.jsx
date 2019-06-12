import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";

const Home = ({ city, storyStore, moodStore }) => {
  const { stories, topMood } = storyStore;
  const { moods, countMood, currentMood } = moodStore;

  console.log(city);
  console.log({ currentMood });
  console.log(moods);
  const test = topMood;
  console.log(test);

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(city);

  const sortStories = filteredStories => {
    const copyStories = [].concat(filteredStories);
    return copyStories.sort((a, b) => b.rate - a.rate);
  };

  const sortedStories = sortStories(filteredStories);

  return (
    <>
      <div className={styles.container_main}>
        <div className={styles.container_left}>
          <div>
            <article
              className={
                currentMood
                  ? currentMood === "happy"
                    ? `${styles.container_intro} bg_yellow `
                    : currentMood === "sad"
                    ? `${styles.container_intro} bg_blue color_white`
                    : `${styles.container_intro} bg_pink color_white`
                  : styles.container_intro
              }
            >
              <h2 className={styles.title_big}>
                De Derde <br />
                Boodschap
              </h2>
              <p className={styles.text_extrabig}>
                Opera Ballet Vlaanderen is looking for the things that move or
                fascinate you, make you happy or even mad.{" "}
              </p>
            </article>

            <article className={styles.container_ctas}>
              <h2 className={styles.visuallyHidden}>Call to Actions</h2>

              <article className={styles.container_ctaToilets}>
                <h3 className={styles.visuallyHidden}>Storytoilets</h3>
                <p className={styles.text_big}>
                  Visit our public toilets and leave your mark…{" "}
                </p>
                <button className={styles.btn_white}>See the map</button>
              </article>

              <article
                className={
                  currentMood
                    ? currentMood === "happy"
                      ? `${styles.container_ctaStory} border_yellow `
                      : currentMood === "sad"
                      ? `${styles.container_ctaStory} border_blue `
                      : `${styles.container_ctaStory} border_pink `
                    : styles.container_ctaStory
                }
              >
                <h3 className={styles.visuallyHidden}>Tell us your story</h3>
                <p className={styles.text_big}>
                  Or drop your story here and make a difference.{" "}
                </p>
                <button className={styles.btn_black}>Tell us your story</button>
              </article>
            </article>
          </div>
          <div className={styles.container_aside}>
            <article>
              <h2 className={styles.visuallyHidden}>Listen</h2>
              <p>Now Playing</p>
              <p>Macbeth</p>
              <button>Listen here</button>
            </article>
            <aside className={styles.container_facts}>
              <h2 className={styles.visuallyHidden}>Facts</h2>
              <div>
                <p>{stories.length}</p>
                <p>stories</p>
              </div>
              <div>
                <p>31</p>
                <p>Storytoilets</p>
              </div>
              <div>
                <p>{countMood(filteredStories, currentMood)}%</p>
                <p>Happy stories</p>
              </div>
            </aside>
          </div>
        </div>

        <article className={styles.container_stories}>
          <h2 className={styles.title_big}>
            Stories of <br />
            {city}
          </h2>
          <p>
            Top 10 van de {stories.length} verhalen uit {currentMood}(mood) van{" "}
            {city}:
          </p>
          {sortedStories.length > 0 ? (
            <div>
              {sortedStories.slice(0, 10).map(story => (
                <ul key={story.id} className={styles.reverse}>
                  <li>{story.description}</li>
                  <li>- {story.mood ? story.mood.name : ""}</li>
                  <li>- {story.rate}</li>
                </ul>
              ))}
            </div>
          ) : (
            <p>No stories</p>
          )}
        </article>
      </div>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Home));
