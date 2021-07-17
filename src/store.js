import create from "zustand"

import { VIEWS } from "./config"

const store = create(set => ({
  view: VIEWS.INTRO,
  appState: null,
  arEngineReady: false,
  sceneEntered: false,
  mute: false,
  currentSongDuration: null
}))

export default store