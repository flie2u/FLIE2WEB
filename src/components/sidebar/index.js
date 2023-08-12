import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoC from '../../assets/images/logo-civic.jpg'
import logoSub from '../../assets/images/logo-civic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to ="/">
            <img src={logoC} alt="logo" />
            <img className="sub-logo" src={logoSub} alt="logo_sub" />
        </Link> 
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar