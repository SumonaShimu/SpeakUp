import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, role: 'user' }
                fetch('https://speakup-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                toast(error.message)
              });
    }

    return (
        <>
            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline">
                Join with <FaGoogle className="text-2xl p-0"></FaGoogle>
            </button>
        </>

    );
};

export default SocialLogin;