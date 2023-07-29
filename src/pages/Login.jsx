import { useState } from "react"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import "./login.scss"
import { motion } from "framer-motion"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    // sign in function
    const signInUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError("Invalid login!")
        }

    }


    return (
        <section className="login-wrapper">
            <div className="login">
                <h1>Sign In</h1>
                <div className="inputs">
                    {error && (
                        <p className="error-message">{error}</p>
                    )}
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttons">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={signInUser}>Sign In
                        
                    </motion.button>
                </div>
            </div>
        </section>
    )
}