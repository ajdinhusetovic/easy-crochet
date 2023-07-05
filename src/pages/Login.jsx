import { useState } from "react"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import "./login.scss"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // sign in function
    const signInUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="login-wrapper">
            <div className="login">
                <h1>Sign In</h1>
                <div className="inputs">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttons">
                    <button onClick={signInUser}>Sign In</button>
                </div>
            </div>
        </section>
    )
}