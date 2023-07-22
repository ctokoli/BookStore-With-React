import { Outlet, Link } from 'react-router-dom';

const NavLayout = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default NavLayout;
