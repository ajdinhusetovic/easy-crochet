import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

export const Login = () => {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
    }
    return (
        <section className="login-wrapper">
            <div className="login">
                <h1>Sign In With Google To Continue</h1>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </section>
    )
}