import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import "./main.scss"

export const Main = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="main-body">
            
            <div className="content">
                <h1 className="title">Hi, Welcome To Easy Crochet!</h1>
                <h2 className="sub-text">Making Croche Easier</h2>
            </div>
        </div>

    )
}