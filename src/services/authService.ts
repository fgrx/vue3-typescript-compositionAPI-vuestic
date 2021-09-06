import axios,{AxiosResponse} from "axios"


interface IUser{
    id:string;
    email:string;
    token:string;
}

export default class AuthService{
    async connectWithEmailAndPassword(email:string,password:string):Promise<IUser|null>{
        try{
            const req=await axios.post(`${process.env.VUE_APP_API_SERVER}/signin`,{email,password})
            const user:IUser={token:req.data.accessToken,id:req.data.user.id,email:req.data.user.email}
            return user
        }catch(err){
            console.log(err)
            return null
        }
    }
}