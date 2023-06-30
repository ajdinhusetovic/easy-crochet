import { useRef } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.scss"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const navRef = useRef()
    const [user] = useAuthState(auth)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    // sign out function
    const logOut = async () => {
        await signOut(auth)
    }

    return (
        <header>
            <h1>EasyCrochet</h1>
            <nav ref={navRef}>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                {user && (
                    <div className="log-out-div">
                        <button onClick={logOut}>Logout</button>
                    </div>
                )}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}