import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"

export const Main = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            Main Page
            {user && (
            <p>user: {user?.email}</p>
        )}
        </div>
        
    )
}