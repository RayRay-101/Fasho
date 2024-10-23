import "../styles/Navbar.css"
import fasho from '../assets/fasho.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav className='nav'>
            <div className='nav-logo'>
                <img src={fasho} alt="logo" />
            </div>
            
            <div className='nav-elements'>
                <ul>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            <div className="nav-logins">
                <ul>
                    <button>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                    </button>
                    <button>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </button>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar