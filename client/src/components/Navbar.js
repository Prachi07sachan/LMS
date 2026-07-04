import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Learning Management Systems
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/users">
            Users
          </Link>

          <Link className="nav-link" to="/courses">
            Courses
          </Link>

          <Link className="nav-link" to="/payments">
            Payments
          </Link>

          <Link className="nav-link" to="/coupons">
            Coupons
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;