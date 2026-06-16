import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="welcome-card">
      <h1>🔐 Authentication System</h1>

      <p>
        Welcome to Jayakar Auth System
      </p>

      <div className="hero-buttons">
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>

        <Link to="/register" className="btn btn-success btn-lg">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Landing;