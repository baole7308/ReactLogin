import "./Home.css";
const Home = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/" id="home-header">
          Home
        </a>
        <a href="/login" id="login-header">
          Login
        </a>
      </div>
    </div>
  );
};

export default Home;
