// import React, {useState} from "react"
// import "./registration.css";
// import axios from "axios"
// import { useHistory } from "react-router-dom"

// const Login = ({ setLoginUser}) => {

//     const history = useHistory()

//     const [ user, setUser] = useState({
//         email:"",
//         password:"",
//         tel: '',
//         password: '',
//         reEnterPassword: ''
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () => {
//         axios.post("http://localhost:5000/login", user)
//         .then(res => {
//             alert(res.data.message)
//             setLoginUser(res.data.user)
//             history.push("/")
//         })
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button" onClick={() => history.push("/register")}>Register</div>
//         </div>
//     )
// }

// export default Login
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  "./registration.css";

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
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<div className="login_container">
			<div className='login_form_container'>
				<div className='left'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className=''
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						{error && <div className='error_msg'>{error}</div>}
						<button type="submit" className='green_btn'>
							Sing In
						</button>
					</form>
				</div>
				<div className='right'>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className='white_btn'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;