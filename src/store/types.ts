import { IRessource } from "@/interfaces/IRessource";
import { IUser } from "@/interfaces/IUser";

export interface RootState{
  version:string;
}

export interface IRessourceState{
    ressources:IRessource[]
}

export interface IAuthState{
  user:IUser|null;
}