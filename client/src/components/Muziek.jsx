import React, { Component } from "react";

class Muziek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: true,
      img: "play",
      width: 0,
      maxWidth: ""
    };
    this.titel = "macbeth";
    this.songDuration = "";
  }

  loadSong() {
    this.song = new Audio();
    this.song.src = "../../assets/music/" + this.titel + ".mp3";
    this.song.type = "audio/mp3";
    return this.song;
  }

  componentDidMount() {
    this.loadSong();
  }

  playSong = () => {
    this.setState(prevState => ({ pause: !prevState.pause }));
    this.song.play();
  };

  stopSong = () => {
    this.setState(prevState => ({ pause: !prevState.pause }));
    this.song.pause();
  };

  componentWillUnmount() {
    this.stopSong();
  }

  render() {
    return (
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

        {this.state.pause ? (
          <button onClick={this.playSong} className={"listenHere"}>
            {" "}
            <span className={"icon"}>
              <span className={"playIcon"} />
            </span>{" "}
            <span>Listen here</span>
          </button>
        ) : (
          <button onClick={this.stopSong} className={"listenHere"}>
            {" "}
            <span className={"icon"}>
              <span className={"pauseIcon"} />
            </span>{" "}
            <span>Listen here</span>
          </button>
        )}
      </article>
    );
  }
}

export default Muziek;
