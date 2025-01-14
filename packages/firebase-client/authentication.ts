import { firebase } from "./init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebase);

export const loginWithGoogle = function() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export const logout = function() {
    return signOut(auth);
}

export const currentUserConnected = function() {
    return new Promise<User | null>((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user);
        })
    });
}