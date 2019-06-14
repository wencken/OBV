import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Muziek from "../components/Muziek";

import styles from "./Home.module.css";

const Home = ({ uiStore, storyStore, moodStore }) => {
  const { stories } = storyStore;
  const { moods, currentMood } = moodStore;
  console.log(moods);

  const { currentCity } = uiStore;

  const test = currentMood;
  console.log(test);

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  const sortStories = filteredStories => {
    const copyStories = [].concat(filteredStories);
    return copyStories.sort((a, b) => b.rate - a.rate);
  };

  const sortedStories = sortStories(filteredStories);

  return (
    <>
      <div className={styles.container_main}>
        <div className={"container_switch"}>
          <div className={styles.container_wrapper}>
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
              <h2 className={"title_big"}>
                De Derde <br />
                Boodschap
              </h2>
              <p className={"text_extrabig"}>
                Opera Ballet Vlaanderen is looking for the things that move or
                fascinate you, make you happy or even mad.{" "}
              </p>
            </article>

            <article className={styles.container_ctas}>
              <h2 className={"visually-hidden"}>Call to Actions</h2>

              <article className={styles.container_ctaToilets}>
                <h3 className={"visually-hidden"}>Storytoilets</h3>
                <p className={"text_big"}>
                  Visit our public toilets and leave your mark…{" "}
                </p>
                <Link to="/information" className={styles.btn_white}>
                  See the map
                </Link>
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
                <h3 className={"visually-hidden"}>Tell us your story</h3>
                <p className={"text_big"}>
                  Or drop your story here and make a difference.{" "}
                </p>
                <Link to="/share" className={styles.btn_black}>
                  Tell us your story
                </Link>
              </article>
            </article>
          </div>
          <div className={"container_aside"}>
            <Muziek />
            <aside className={"container_facts"}>
              <h2 className={"visually-hidden"}>Facts</h2>
              <div>
                <p className="title_small">{stories.length}</p>
                <p>stories</p>
              </div>
              <div>
                <p className="title_small">31</p>
                <p>Storytoilets</p>
              </div>
              <div>
                <p className="title_small">%</p>
                <p>
                  <span>Happy</span> stories
                </p>
              </div>
            </aside>
          </div>
        </div>

        <article
          className={`
        ${styles.container_stories}
        `}
        >
          <button className={`${styles.toggle}`}>VVVVVVVVV</button>
          <div
            className={
              currentMood
                ? currentMood === "happy"
                  ? `${styles.stories_happy} ${styles.stories_tiles} `
                  : currentMood === "sad"
                  ? `${styles.stories_sad} ${styles.stories_tiles} `
                  : `${styles.stories_mad} ${styles.stories_tiles} `
                : `${styles.stories_sad} ${styles.stories_tiles} `
            }
          >
            <h2 className={`${styles.title_where} title_big`}>
              <span
                className={
                  currentMood
                    ? currentMood === "happy"
                      ? `${styles.top_title_yellow} `
                      : currentMood === "sad"
                      ? `${styles.top_title_blue} `
                      : `${styles.top_title_pink} `
                    : styles.top_title_blue
                }
              >
                Stories of
              </span>{" "}
              <br />
              {currentCity}
            </h2>
            <p className={"visually-hidden"}>
              Top 4 van de {filteredStories.length} verhalen uit {currentMood}
              (mood) van {currentCity}
            </p>
            {sortedStories.length > 0 ? (
              sortedStories.slice(0, 4).map(story => (
                <ul key={story.id} className={styles.reverse}>
                  <li>{story.description}</li>
                </ul>
              ))
            ) : (
              <p>No stories</p>
            )}
            <div
              className={
                currentMood
                  ? currentMood === "happy"
                    ? `${styles.stories_happy} ${styles.button_border} `
                    : currentMood === "sad"
                    ? `${styles.stories_sad} ${styles.button_border} `
                    : `${styles.stories_mad} ${styles.button_border} `
                  : `${styles.stories_sad} ${styles.button_border} `
              }
            >
              <button className={styles.more_button}>Read more stories</button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Home));
