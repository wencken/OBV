import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

// import love from "./assets/img/love.jpg";
// import pee from "../../assets/img/pee.jpg";
// import tag from "../../assets/img/tag.jpg";
// import whoever from "../../assets/img/whoever.jpg";

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
          <div className={styles.container_aside}>
            <article className={"btn_listen bg_black color_white"}>
              <img
                src="../../assets/img/headphones2.png"
                alt="White headphones with soundwaves"
                width="50"
                height="59"
              />
              <h2 className={"visually-hidden"}>Listen</h2>
              <p className={"text_small"}>Now Playing</p>
              <p className={"navTitle"}>Macbeth</p>

              <button className={styles.listenHere}>
                {" "}
                <span className={styles.icon}>
                  {/* <span className={styles.playIcon} /> */}
                  <span className={styles.pauseIcon} />
                </span>{" "}
                <span>Listen here</span>
              </button>
            </article>
            <aside className={styles.container_facts}>
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

        <article className={styles.container_stories}>
          <h2 className={"title_big"}>
            Stories of <br />
            {currentCity}
          </h2>
          <p>
            Top 10 van de {stories.length} verhalen uit {currentMood}(mood) van{" "}
            {currentCity}:
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

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Home));
