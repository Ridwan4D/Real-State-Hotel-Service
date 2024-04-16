import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const upgradeProfile = (name, image,email) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name ? name : user.displayName,
      photoURL: image ? image : user.photoURL,
      email: email ? email : user.email,
    });
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserWithGithub = ()=>{
    setLoading(true);
    return signInWithPopup(auth,githubProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("consoling from", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    createUserWithGoogle,
    createUserWithGithub,
    upgradeProfile,
    signIn,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
