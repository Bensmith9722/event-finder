import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export const  AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            (user)? setUser(user): setUser(null);
            console.log(user);
        });
    }, []);

    /* Waiting respsonse from firebase. */
    if (user === undefined) {
        return (
            <>
                Loading... .. .
            </>
        );
    }
    else {
        return (
            <AuthContext.Provider value={{ user }}>
                { children /* Render children */}
            </AuthContext.Provider>
        );
    }
};