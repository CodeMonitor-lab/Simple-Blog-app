import React,{createContext,useContext,useState} from 'react'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ()=>{
    const [isAuthanticated,setIsAuthanticated] = useState(null)
    const [loadding, setLoading] = useState(false)
    const AuthValue = {
        isAuthanticated,
        setIsAuthanticated,
        loadding,
        setLoading
    }
    return(
        <AuthContext.Provider value={(AuthValue)} >
            {/* {Children} */}
        </AuthContext.Provider>
    )
}

export default AuthProvider
