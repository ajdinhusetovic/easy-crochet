import { useRef } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.scss"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { motion } from "framer-motion"

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
            <div className="title">
                <h1>EasyCrochet</h1>
                {user && (
                    <p className="user-email">{user?.email}</p>
                )}
            </div>
            <nav ref={navRef}>
                <Link to={"/"}>Home</Link>
                <Link to={"/register"}>Register</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/counter"}>Counter</Link>
                <Link to={"/patterns"}>Patterns</Link>
                {user && (
                    <div className="log-out-div">
                        <motion.button
                            whileTap={{scale: 0.9}}
                            onClick={logOut}
                            id="log-out-btn">
                            Logout
                        </motion.button>
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