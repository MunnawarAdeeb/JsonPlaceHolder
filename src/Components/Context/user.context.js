import { createContext, useState} from "react";
export const UserNameContext=createContext({name:""})
export const UserNameProvider=({children})=>{
const [userName,setUserName]=useState([])
const value={userName,setUserName};
return<UserNameContext.Provider value={value}>
    {children}
</UserNameContext.Provider>
}