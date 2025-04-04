// 1. create usercontext
"use client"

import { createContext, useContext } from "react";

const UserContext =createContext(null);

// 2. creata a user provider
export const UserProvider = ({childern})=>{
    const user = {
        name: "Nilesh",
        email: "nilesh@gmail.com"
    };

    const myRollNo = "1111111"



    return <UserContext.Provider value={{user}}>{childern}</UserContext.Provider>
};


export const useUser =() =>{
    const context = useContext(UserContext);

    if (context === undefined){
        throw new Error("context not found")
    }

    return context;
}
