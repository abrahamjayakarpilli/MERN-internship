function Register() {
  return (
    <div className="welcome-card">
      <h1>Register</h1>

      <form style={{ marginTop: "20px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

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

        <button className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;