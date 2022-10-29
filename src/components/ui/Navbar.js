import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-around px-5">

            <Link
                className="navbar-brand"
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse ms-3">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link ms-4"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link ms-4"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse justify-content-end">
                <ul className="navbar-nav justify-content-end">
                    <NavLink
                        className="nav-item nav-link "
                        to="/login">
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}