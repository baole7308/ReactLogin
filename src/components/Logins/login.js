import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLogin();
  };

  const validateLogin = () => {
    console.log(email, password);
    if (email === "abc@gmail.com" && password === "123456") {
      alert("Đăng Nhập Thành Công");
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  };

  return (
    <div className="main">
      <form
        className="form"
        id="form-1"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3 className="heading">Đăng Nhập</h3>
        <div className="spacer"></div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Tài khoản
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value.trim())}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Mật khẩu"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="form-submit" type="submit">
          Đăng Nhập
        </button>
        <a className="form-link" href="/register">
          Đăng ký tài khoản
        </a>
      </form>
    </div>
  );
};

export default Login;
