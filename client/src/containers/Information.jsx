import React from "react";
import Map from "../components/Map";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <>
      <section>
        <h2>What's this?</h2>
        <div className={styles.container_aside}>
          <article>
            <h3 className={`visually-hidden`}>Listen</h3>
            <p>Now Playing</p>
            <p>Macbeth</p>
            <button>Listen here</button>
          </article>
          <aside className={styles.container_facts}>
            <h3 className={`visually-hidden`}>Intro</h3>
            <p className={"text_italic"}>
              Opera is boring, too expensive or only for old people.
            </p>
            <p>
              On the contrary! This campaign shows you that opera and ballet are
              breathtaking. It is all about stories and emotions.
            </p>
            <a className={`btn_black`} href="./share">
              Tell your story
            </a>
          </aside>
        </div>
        <article className={styles.container_stories}>
          <h3 className={`visually-hidden`}>Why?</h3>
          <p>
            <span className={"text_bold"}>Write your story{""}</span>
            on the wall of these amazing public toilets. Because you can!
          </p>
          <p>
            But still don't know what to write?{" "}
            <span className={"text_bold"}>Get inspired{""}</span>by others.
          </p>
          <p>
            Because <span className={"text_bold"}>your story matters</span>! Say
            whatever you want (nobody knows who it's from)…
          </p>
          <p>
            … and maybe you'll see your story on stage in the{" "}
            <span className={"text_bold"}>best international opera house</span>.
          </p>
        </article>
        <Map />
      </section>
    </>
  );
};

export default Information;
