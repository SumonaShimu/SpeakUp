import React, { useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase.config';
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    // Gooogle sign in_____________________________
    const handleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggeduser = result.user;
                setUser(loggeduser)
            })
            .catch(error => console.log(error))
    }
    // Github sign in______________________________
    const gitSignin = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const loggeduser = result.user;
                setUser(loggeduser)
            })
            .catch(error => console.log(error))
    }

    // Facebook sign in______________________________(error)
    const fbSignin = () => {
        signInWithPopup(auth, fbProvider)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
                setUser(loggeduser)
            })
            .catch(error => console.log(error.message))
    }

    // signing Out______________________________
    const handleLogOut = () => {
        signOut(auth)
            .then(result => setUser(null))
            .catch(error => console.log(error))
    }


    return (
        <div>
            {
            user && 
                <div>
                    <h3>{user.displayName}</h3>
                    <h5>{user.email}</h5>
                    <img src={user.photoURL} />
                </div>
            }
            {
            user ?
                <button onClick={handleLogOut} style={{ display: 'block', width: '100%' }}>Log Out</button> :
                <>
                <button onClick={handleSignIn} style={{width: '100%' }}>Login with Google</button> 
                
                </>

            }
        </div>
    );
};

export default Login;