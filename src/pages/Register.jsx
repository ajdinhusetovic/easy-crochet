import React from 'react'
import { useState } from 'react'
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "./register.scss"

export const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUserAccount = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

  return (
    <section className="register-wrapper">
            <div className="register">
                <h1>Create An Account</h1>
                <div className="inputs">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="buttons">
                    <button onClick={createUserAccount}>Register</button>
                </div>
            </div>
        </section>
  )
}
