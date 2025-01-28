import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import { auth } from '../FirebaseAuth/firebase.config';
export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // create User Email And Password
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe()
    },[])
    const dataInfo = {
        createUser,loading,user
    }
    return (
        <AuthContext.Provider value={dataInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;