import { useRef } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.scss"

export const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <h1>EasyCrochet</h1>
            <nav ref={navRef}>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
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