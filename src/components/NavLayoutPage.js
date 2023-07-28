import { Outlet, NavLink } from 'react-router-dom';

const NavLayout = () => (
  <>
    <nav>
      <ul className="menu">
        <li className="logo"><NavLink to="/">Bookstore CMS</NavLink></li>
        <li className="link"><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>BOOKS</NavLink></li>
        <li className="link"><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/categories">CATEGORIES</NavLink></li>
        <li className="profile"><i className="fa-solid fa-user"> </i></li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default NavLayout;
