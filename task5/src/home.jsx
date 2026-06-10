function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome 👋</h1>

        <p>Create your account</p>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Home;