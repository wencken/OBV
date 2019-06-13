import React from "react";
import Map from "../components/Map";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <>
      <div className={"container_switch"}>
        <article className={"container_right"}>
          <h2 className={"title_small"}>What's this?</h2>

          <div>
            <p>
              <span className={"text_bold"}>Write your story{""}</span>
              on the wall of these amazing public toilets. Because you can!
            </p>
            <p>
              But still don't know what to write?{" "}
              <span className={"text_bold"}>Get inspired </span> by others.
            </p>
            <p>
              Because <span className={"text_bold"}>your story matters</span>!
              Say whatever you want (nobody knows who it's from)…
            </p>
            <p>
              … and maybe you'll see your story on stage in the{" "}
              <span className={"text_bold"}>
                best international opera house
              </span>
              .
            </p>
          </div>

          <Map />
        </article>

        <div className={"container_aside"}>
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

            <button className={"listenHere"}>
              {" "}
              <span className={"icon"}>
                <span className={"playIcon"} />
                <span className={"pauseIcon"} />
              </span>{" "}
              <span>Listen here</span>
            </button>
          </article>

          <aside className={"container_facts"}>
            <h3 className={"visually-hidden"}>Intro</h3>
            <p className={"text_italic"}>
              Opera is boring, too expensive or only for old people.
            </p>
            <p>
              On the contrary! This campaign shows you that opera and ballet are
              breathtaking. It is all about stories and emotions.
            </p>
            <a className={styles.btn_black} href="./share">
              Tell your story
            </a>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Information;
