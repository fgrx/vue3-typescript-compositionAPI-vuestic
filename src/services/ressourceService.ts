import axios, { AxiosResponse } from "axios"

import {IRessource} from "@/interfaces/IRessource"

interface IRessourceService{
    getAllRessources():Promise<IRessource[]>;
    getUnvalidatedRessources():Promise<IRessource[]>;
    saveRessource(ressource:IRessource):Promise<IRessource|null>;
    getRessourceByID(id:string):Promise<IRessource|null>;
    updateRessource(ressource:IRessource):Promise<IRessource|null>;
    deleteRessourceByID(id:string):Promise<AxiosResponse|null>;
}

class RessourceService implements IRessourceService{
    async getAllRessources(): Promise<IRessource[]>{
        let ressources=[] as IRessource[]
        
        try{
            const req = await axios.get(`${process.env.VUE_APP_API_SERVER}/ressources?isValid=true&_sort=date&_order=desc`);
            ressources= req.data
        }catch(err){
            console.log(err);
        }

        return ressources
    }

    async getUnvalidatedRessources(): Promise<IRessource[]>{
        let ressources=[] as IRessource[]
        
        try{
            const req = await axios.get(`${process.env.VUE_APP_API_SERVER}/ressources?isValid=false&_sort=date&_order=desc`);
            ressources= req.data
        }catch(err){
            console.log(err);
        }

        return ressources
    }

    async saveRessource(ressource:IRessource):Promise<IRessource|null>{
        try{
            const req=await axios.post(`${process.env.VUE_APP_API_SERVER}/ressources`,ressource)
            return req.data as IRessource
        }catch(err){
            console.log(err)
            return null
        }
    }

    async getRessourceByID(id:string):Promise<IRessource|null>{
        try{
            const req=await axios.get(`${process.env.VUE_APP_API_SERVER}/ressources/${id}`)           
            return req.data as IRessource
        }catch(err){
            console.log(err)
            return null
        }
    }

    async updateRessource(ressource:IRessource):Promise<IRessource|null>{
        try{
            const req=await axios.put(`${process.env.VUE_APP_API_SERVER}/ressources/${ressource.id}`,ressource)           
            return req.data as IRessource
        }catch(err){
            console.log(err)
            return null
        }
    }

    async deleteRessourceByID(id:string):Promise<AxiosResponse|null>{
        try{
            const req =await axios.delete(`${process.env.VUE_APP_API_SERVER}/ressources/${id}`)
            return req
        }catch(err){
            console.log(err);
            return null
        }
    }
}

export default RessourceService;