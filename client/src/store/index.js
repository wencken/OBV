import StoryStore from "./StoryStore";
import MoodStore from "./MoodStore";

class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this);
    this.moodStore = new MoodStore(this);
  }
}

export default new RootStore();
