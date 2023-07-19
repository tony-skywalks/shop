import { Fragment } from 'react'
import {Outlet,Link} from 'react-router-dom'
import { ReactComponent as SiteLogo } from '../../assets/crown.svg'
import './nav.style.scss'

const Nav = () => {
    return (
        <Fragment>
            <div className='nav'>
                <Link className='logo-wrap' to="/">
                    <SiteLogo className='logo' />
                </Link>
                <div className='nav-links-wrap'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    <Link className='nav-link' to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Nav;