import {createContext,useEffect, useReducer} from "react"
import { AuthReducer } from "./AuthReducer"
const store = {
    user:null,
}
export const AuthContext = createContext(store)

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,store)
    return(
        <AuthContext.Provider
            value = {{
                user:state.user,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    )

}