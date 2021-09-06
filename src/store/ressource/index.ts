import { Module } from "vuex";
import {mutations}from "@/store/ressource/mutations"
import {actions}from "@/store/ressource/actions"
import {getters}from "@/store/ressource/getters"
import { IRessourceState, RootState } from "../types";

const state:IRessourceState={
    ressources:[]
}

const ressourceModule:Module<IRessourceState,RootState>={
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}


export default ressourceModule