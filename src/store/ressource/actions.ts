import { IRessource } from "@/interfaces/IRessource";
import { ActionTree } from "vuex";
import { IRessourceState, RootState } from "../types";


export const actions:ActionTree<IRessourceState,RootState>={
    updateRessourcesAction({commit},payload:IRessource[]){
        commit("updateRessources",payload)
    },
    addRessourceAction({commit},ressource:IRessource){
        commit("addRessource",ressource)
    },
    updateRessourceAction({commit},ressource:IRessource){
        commit("updateRessource",ressource)
    },
    deleteRessourceAction({commit},id:string){
        commit("deleteRessource",id)
    }
}