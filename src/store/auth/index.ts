import { Module } from "vuex";
import { IUser } from "@/interfaces/IUser";
import { ActionTree, MutationTree } from "vuex";
import { IAuthState, RootState } from "../types";

const state:IAuthState={
    user:null
}

const mutations:MutationTree<IAuthState>={
    updateUser(state,user:IUser){
        state.user=user
    }
}

const actions:ActionTree<IAuthState,RootState>={
    updateUserAction({commit},user:IUser|null){
        commit("updateUser",user)
    }
}

const authModule:Module<IAuthState,RootState>={
    namespaced:true,
    state,
    mutations,
    actions
};

export default authModule