import axios, { AxiosResponse } from "axios"

import {IRessource} from "@/interfaces/IRessource"

interface IRessourceService{
    getAllRessources():Promise<IRessource[]>;
    saveRessource(ressource:IRessource):Promise<IRessource|null>;
    getRessourceByID(id:string):Promise<IRessource|null>;
    getUnvalidatedRessources(token:string):Promise<IRessource[]>;
    updateRessource(ressource:IRessource,token:string):Promise<IRessource|null>;
    deleteRessourceByID(id:string,token:string):Promise<AxiosResponse|null>;
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

    async updateRessource(ressource:IRessource,token:string):Promise<IRessource|null>{
        try{
            // const headers={
            //     "Authorization":`Bearer ${token}`
            // }
            const req=await axios.put(`${process.env.VUE_APP_API_SERVER_PROTECTED}/ressources/${ressource.id}`,ressource)           
            return req.data as IRessource
        }catch(err){
            console.log(err)
            return null
        }
    }

        async getUnvalidatedRessources(token:string): Promise<IRessource[]>{
        let ressources=[] as IRessource[]
        
        const headers={headers:{"Authorization":`Bearer ${token}`}}

        try{
            const req = await axios.get(`${process.env.VUE_APP_API_SERVER_PROTECTED}/ressources?isValid=false&_sort=date&_order=desc`,headers);
            ressources= req.data
        }catch(err){
            console.log(err);
        }

        return ressources
    }

    async deleteRessourceByID(id:string,token:string):Promise<AxiosResponse|null>{
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