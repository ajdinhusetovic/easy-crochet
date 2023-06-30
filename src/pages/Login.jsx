import { useState } from "react"
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import "./login.scss"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // register function
    const createUserAccount = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in function
    const signInUser = async () => {
        await signInWithEmailAndPassword(auth, email, password)
    }


    return (
        <section className="login-wrapper">
            <div className="login">
                <h1>Create An Account or Sign In With Existing Account</h1>
                <div className="inputs">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttons">
                    <button onClick={createUserAccount}>Register</button>
                    <button onClick={signInUser}>Sign In</button>
                </div>
            </div>
        </section>
    )
}