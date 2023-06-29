import { auth, provider } from "../config/firebase"

export const Login = () => {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
    }
    return (
        <section className="login-wrapper">
            <div className="login">
                <h1>Login</h1>
            </div>
        </section>
    )
}