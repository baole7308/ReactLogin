import { useState } from "react";
import "./Register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validateName = (name) => {
    return name.trim() !== "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const isFormValid = () => {
    return (
      validateName(name) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword)
    );
  };
  const handleBlurConfirmPassword = () => {
    if (!validateConfirmPassword(confirmPassword)) {
      setConfirmPasswordError("Mật khẩu không khớp");
    } else {
      setConfirmPasswordError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setSubmitError("");
      console.log("Form submitted successfully");

      let getdata = { name, email, password };
      console.log(getdata);

      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(getdata),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setSubmitError(
        "Vui lòng điền đầy đủ thông tin và đảm bảo rằng các thông tin hợp lệ."
      );
      if (!validateConfirmPassword(confirmPassword)) {
        setConfirmPasswordError("Mật khẩu không khớp");
      }
    }
  };

  return (
    <div className="main">
      <form
        action=""
        method="POST"
        className="form"
        id="form-1"
        onSubmit={handleSubmit}
      >
        <h3 className="heading">Đăng ký tài khoản</h3>

        <div className="spacer"></div>
        <div className="form-group">
          <label htmlFor="fullname" className="form-label">
            Nhập họ và tên
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="VD: Nguyễn Văn A"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {!validateName(name) && (
            <span className="form-message">Họ và tên không được để trống</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value.trim())}
          />
          {!validateEmail(email) && (
            <span className="form-message">Email không hợp lệ</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {!validatePassword(password) && (
            <span className="form-message">
              Mật khẩu phải có ít nhất 6 ký tự
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Nhập lại mật khẩu"
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            onBlur={handleBlurConfirmPassword}
          />
          {confirmPasswordError && (
            <span className="form-message">{confirmPasswordError}</span>
          )}
        </div>

        <button
          className={`form-submit ${
            name && email && password && confirmPassword
          } ? "Active" : ""`}
        >
          Đăng ký
        </button>
        {submitError && <span className="form-message">{submitError}</span>}
      </form>
    </div>
  );
};

export default Register;
