import "./Home.css";
const Home = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/" id="home-header">
          Home
        </a>
        <div>
          <a href="/login" id="login-header">
            Login
          </a>
          <span className="center"></span>
          <a href="/register" id="register-header">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
