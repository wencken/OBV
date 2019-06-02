import StoryStore from "./StoryStore";
// import MoodStore from "./MoodStore";

class Store {
  constructor() {
    this.storyStore = new StoryStore(this);
  }
}

export default new Store();
