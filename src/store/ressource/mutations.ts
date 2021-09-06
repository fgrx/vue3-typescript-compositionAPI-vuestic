import { IRessource } from "@/interfaces/IRessource";
import { MutationTree } from "vuex";
import { IRessourceState } from "../types";

export const mutations:MutationTree<IRessourceState>={
    updateRessources(state,payload:IRessource[]){
        state.ressources=payload
    },
    addRessource(state,ressource:IRessource){
        state.ressources.unshift(ressource)
    },
    
    updateRessource(state,ressource:IRessource){
        let ressourceInStore=state.ressources.find(r=>ressource.id===r.id)
        ressourceInStore=ressource
    },

    deleteRessource(state,id:string){
        state.ressources=state.ressources.filter(ressource=>ressource.id!==id)
    }

}