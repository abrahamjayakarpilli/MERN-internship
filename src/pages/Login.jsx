function Login() {
  return (
    <div className="welcome-card">
      <h1>Login</h1>

      <form style={{ marginTop: "20px" }}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;