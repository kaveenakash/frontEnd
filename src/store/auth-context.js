import React,{useState} from 'react'

const AuthContext = React.createContext({
    name:"kaveen",
    token:"",
    role:"",
    isLoggedIn:false,
    login:(token) =>{},
    logout:() => {}
})

export const AuthContextProvider =  (props) =>{
    const initialToken = localStorage.getItem('token');
    const initialRole = localStorage.getItem('role');
    const [token,setToken] = useState(initialToken) 
    const [role,setRole] = useState(initialRole)

    const userIsLoggedIn = !!token;

    const loginHandler = (token,role) =>{
        setToken(token)
        setRole(role)
        localStorage.setItem('token',token);
        localStorage.setItem('role',role);
    }

    const logoutHandler = () => {
        setToken(null)
        setRole(null)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }
   

    const contextValue = {
        token:token,
        role,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}


export default AuthContext;