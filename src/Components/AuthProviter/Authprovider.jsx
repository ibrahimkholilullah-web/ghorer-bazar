import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../FirebaseAuth/firebase.config';

export const AuthContext = createContext(null);

// ✅ Move auth instance outside the component to prevent unnecessary re-instantiations
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
     // sign in user
     const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
     }
     // logout
     const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
     }
     // login google
     const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
    // Update user profile (name & photo)
    const updateUser = (name, photo) => {
        setLoading(true);
        if (!auth.currentUser) return Promise.reject("No user logged in.");
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // Track authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // ✅ Proper cleanup to avoid memory leaks
    }, []); 

    const dataInfo = {
        createUser,
        loading,
        user,
        updateUser,
        signInUser,
        logoutUser,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={dataInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
