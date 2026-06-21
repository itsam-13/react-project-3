import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex justify-center items-center gap-10 p-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    )
}

export default Nav
