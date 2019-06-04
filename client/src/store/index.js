import StoryStore from "./StoryStore";
import MoodStore from "./MoodStore";
import UiStore from "./UiStore";

class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this);
    this.moodStore = new MoodStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default new RootStore();
