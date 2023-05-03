import './index.scss'
import { Link } from 'react-router-dom'
import logoC from '../../assets/images/logo-civic.jpg'
import logoSub from '../../assets/images/logo-civic.jpg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={logoC} alt="logo" />
            <img src={logoSub} alt="logo_sub" />
        </Link>
    </div>
)

export default Sidebar