import { Outlet, Link } from 'react-router-dom';

const NavLayout = () => (
  <>
    <nav>
      <ul className="menu">
        <li className="logo"><Link to="/">Bookstore CMS</Link></li>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default NavLayout;
