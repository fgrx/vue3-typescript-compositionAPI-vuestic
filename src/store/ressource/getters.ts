import { GetterTree } from "vuex";
import { IRessourceState, RootState } from "../types";

export const getters: GetterTree<IRessourceState, RootState> = {
  getTopRessources(state: IRessourceState) {
    return state.ressources.filter((ressource) => ressource.isTop);
  },

  getValidRessources(state: IRessourceState) {
      return state.ressources.filter((ressource) => ressource.isValid);
  },
};
