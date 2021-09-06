import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import ressourceModule from "./ressource";
import authModule from './auth'

export default createStore({
  state: {version:"1.0"},
  mutations: {},
  actions: {},
  modules: {
    ressourceModule,
    authModule
  },
  plugins: [createPersistedState()],
});
