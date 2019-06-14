import React, { Component } from "react";
import styles from "./Information.module.css";
import { inject, observer } from "mobx-react";
import Muziek from "../components/Muziek";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCity: this.props.uiStore.currentCity };
  }
  render() {
    return (
      <>
        <div className={"container_switch"}>
          <article className={"container_right"}>
            <h2 className={"title_small"}>What's this?</h2>

            <div className={styles.container_content}>
              <article>
                <p className={styles.text}>
                  <span className={"text_bold"}>Write your story</span> on the
                  wall of these amazing public toilets. Because you can!
                </p>
                <p className={styles.text}>
                  But still don't know what to write?{" "}
                  <span className={"text_bold"}>Get inspired </span> by others.
                </p>
                <p className={styles.text}>
                  Because{" "}
                  <span className={"text_bold"}>your story matters</span>! Say
                  whatever you want (nobody knows who it's from)…
                </p>
                <p className={styles.text}>
                  … and maybe you'll see your story on stage in the{" "}
                  <span className={"text_bold"}>
                    best international opera house
                  </span>
                </p>
              </article>
              {this.props.uiStore.currentCity === "Antwerp" ? (
                <img
                  src="../../assets/img/Antwerp-kaart.jpg"
                  alt="Kaart van Antwerp"
                />
              ) : (
                <img
                  src="../../assets/img/Ghent-kaart.jpg"
                  alt="map of Ghent"
                />
              )}
            </div>
          </article>

          <div className={"container_aside"}>
            <Muziek />

            <aside className={"container_facts"}>
              <h3 className={"visually-hidden"}>Intro</h3>
              <p className={"text_italic"}>
                Opera is boring, too expensive or only for old people.
              </p>
              <p>
                On the contrary! This campaign shows you that opera and ballet
                are breathtaking. It is all about stories and emotions.
              </p>
              <a className={styles.btn_black} href="./share">
                Tell your story
              </a>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default inject(`uiStore`)(observer(Information));
