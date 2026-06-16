import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jayakar AuthSystem
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Landing
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

          <Link className="nav-link" to="/register">
            Register
          </Link>

          <Link className="nav-link" to="/home">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;