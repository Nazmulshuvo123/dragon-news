import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.init";



export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createNewUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;