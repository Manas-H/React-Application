import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./registration.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", JSON.stringify(res.data));
      window.location = "/";
      alert("You are Logged In")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="title">
          <div className="register link_path">
            <Link to="/register" className="link">
              Register
            </Link>
          </div>
          <div className="login link_path">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
        <form method="register" onSubmit={handleSubmit}>
          {console.log("User", data)}

          <div className="row">
            <div className="user__details">
              <div className="input__box">
                <span className="details">Email</span>
              </div>
              <input
                type="text"
                value={data.email}
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="user__details details_pt">
            <div className="input__box">
              <span className="details">Password</span>
            </div>
            <input
              type="password"
              value={data.name}
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
            />
          </div>

            {error && <div className="error_msg">{error}</div>}
            <div className="button">
              <button>Login</button>
            </div>
          </div>
          <div className="right">
            <span>Do not have Account? - </span>
            <Link to="/register">register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;