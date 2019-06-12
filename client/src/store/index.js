import StoryStore from "./StoryStore";
import MoodStore from "./MoodStore";
import UiStore from "./UiStore";
import EmailStore from "./EmailStore";

class RootStore {
  constructor() {
    this.uiStore = new UiStore(this);
    this.moodStore = new MoodStore(this);
    this.storyStore = new StoryStore(this);
    this.emailStore = new EmailStore(this);
  }
}

export default new RootStore();
