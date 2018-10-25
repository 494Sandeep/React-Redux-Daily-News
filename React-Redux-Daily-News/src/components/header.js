import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="header">
            <Link to="/">
                Daily NEWS
            </Link>
        </header>
    )
}
export default Header;