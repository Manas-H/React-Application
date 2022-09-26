import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterationModal = () => {
  // const [user, setUser] = useState({
  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    reEnterPassword: "",
  });
 
  const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch(error) {
      if(
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);

  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const register = () => {
  //   const { name, email, tel, password, reEnterPassword } = user;
  //   console.log(user);
  //   if (name && email && tel && password === reEnterPassword) {
  //     // alert('posted');
  //     axios.post("http://localhost:5000/register", user).then((res) => {
  //       alert(res.data.message);
  //       // history.push("/login");
  //     });
  //   } else {
  //     alert("invalid input");
  //   }
  // };
  return (
  
      <div className="register">
          <form onSubmit={handleSubmit}>
      {console.log("User", data)}
      <h1>Register</h1>
     <div className="data">
      <label>Full Name</label>
      <input
        type="text"
        value={data.name}
        name="name"
        placeholder="Enter your Full Name"
        onChange={handleChange}
        // {...register("name", { required: true, maxLength: 10 })}
      />
       {/* {errors.name && (
              <p className="error-msg">Please check the First Name</p>
       )}; */}
     </div>
     <div className="data">
     <label>E-mail</label>
      <input
        type="text"
        value={data.email}
        name="email"
        placeholder="Enter Your Email"
        onChange={handleChange}
        required
      />
      </div>
       <div className="data">
       <label>Mobile Number</label>
      <input
        type="tel"
        value={data.tel}
        name="tel"
        placeholder="Enter your Mobile Number"
        onChange={handleChange}
        required
      />
      </div>
       <div className="data">
       <label>Password</label>
      <input
        type="password"
        value={data.password}
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        required
      />
      </div>
       <div className="data">
       <label>Re-Enter Password</label>
      <input
        type="password"
        value={data.reEnterPassword}
        name="reEnterPassword"
        placeholder="Enter password"
        onChange={handleChange}
        required
      />
      </div>
      {error && <div className="">{error}</div>}
      <button type="submit" className="button">
							Sing Up
						</button>
      <div>or</div>
      {/* <div className="button" onClick={() => history.push("/login")}>
        Login
      </div> */}
      <Link to="/login">
        <button type="button">Sign in</button>
      </Link>
          </form>
    </div>

  );
};

export default RegisterationModal;

// import React from 'react';

// const RegisterationModal = (props) => {
// return(
//   <div>
//     <input ref={props} placeholder={props.placeholder} />
//   </div>
// )
// }
// export default RegisterationModal

// import React from "react";
// import "../styles/registration.css";
// import { ImCross } from "react-icons/im";
// import {showModal, setShowModal} from "../Navigationbar";
// import useForm from "../useForm";

// const RegisterationModal = ({ closeModal }) => {

//   const formLogin = () => {
//     console.log("Callback function when form is submitted")
//     console.log("From Values", values);
//   }

//   const {handleChange, values, errors, handleSubmit } = useForm(formLogin);

//   return (
//     <>
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <div className="outer-div">
//             <div className="inner-div">
//               <span>
//                 <ImCross onClick={() => closeModal(false)} />
//               </span>

//               <div className="form-info">
//                 <h1>Register</h1>
//                 <div className="a-row Name">
//                   <label className="a-form-label">
//                     Your name
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="First and Last name"
//                     name="username"
//                     className="a-input-text"
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {
//                   errors.username && <h6>{errors.username}</h6>
//                 }

//                 <div className="a-row mobile-number">
//                   <label className="a-form-label">Mobile number</label>

//                     <label className='mobile-label-area'>IN +91</label>
//                     <input
//                       type="tel"
//                       placeholder="Mobile number"
//                       name="tel"
//                       className="a-input-text a-spacing-micro"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   {
//                   errors.tel && <h6>{errors.tel}</h6>
//                 }

//                 <div className=" a-row Email">
//                   <label className="a-form-label">Email</label>
//                   <br />
//                   <input
//                     type="email"
//                     autoComplete="email"
//                     name="email"
//                     placeholder="Enter the Email.."
//                     className="a-input-text a-span12"
//                     onChange={handleChange}
//                   ></input>
//                 </div>
//                 {
//                   errors.email && <h6>{errors.email}</h6>
//                 }

//                 <div className="a-row password">
//                   <label className="a-form-label">Password</label>
//                   <br />
//                   <input
//                     type="password"
//                     maxLength="8"
//                     placeholder="At least 6 characters"
//                     name="password"
//                     required
//                     className="a-input-text a-span12"
//                     onChange={handleChange}
//                   />
//                   <div class="a-box-inner a-alert-container">
//                     <div class="a-alert-content">
//                       Passwords must be at least 8 characters.
//                     </div>
//                   </div>
//                 </div>
//                 {
//                   errors.password && <h6>{errors.password}</h6>
//                 }
//                 <button type='submit' value="Submit" className="create-acc-btn">Create a Account</button>
//               </div>

//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default RegisterationModal;

// import React from "react";
// import { useForm } from "react-hook-form";
// import "./registration.css";
// import axios from "axios";

// const RegisterationModal = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       fname: "",
//       lname: "",
//       email: "",
//       tel: "",
//       password: "",
//     },
//   });

// const register = ({fname, lname, email, tel, password}) => {
//  const user =  { fname, lname, email, tel, password }
//  console.log(user)
//   if (fname && lname && email && tel && password) {
//     alert('posted');
//     axios.post(`http://localhost:5000/register`, user);
//   }else{
//     alert('invalid input')
//   }
// };
//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className="outer-div">
//       <div className="inner-div">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="full-name-div">
//             <div className="fname">
//               <label className="a-form-label">First Name</label>
//               <input
//                 className="a-input-text"
//                 placeholder="First Name"
//                 type="fname"
//                 {...register("firstName", { required: true, maxLength: 10 })}
//               />
//               {errors.firstName && (
//                 <p className="error-msg">Please check the First Name</p>
//               )}
//             </div>

//             <div className="lname">
//               <label className="a-form-label">Last Name</label>
//               <input
//                 className="a-input-text"
//                 placeholder="Last Name"
//                 type="lname"
//                 {...register("lastName", { required: true, maxLength: 10 })}
//               />
//               {errors.lastName && (
//                 <p className="error-msg">Please check the Last Name</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="a-form-label">Email</label>
//             <input
//               placeholder="Email"
//               className="a-input-text"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//                 pattern:
//                   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//               })}
//             />
//           </div>
//           {errors.email && <p className="error-msg">Please check the Email</p>}

//           <div>
//             <label className="a-form-label">Mobile Number</label>
//             <input
//               placeholder="Mobile Number"
//               className="a-input-text"
//               type="tel"
//               {...register("tel", {
//                 required: true,
//                 pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
//               })}
//             />
//           </div>
//           {errors.tel && (
//             <p className="error-msg">Please Enter the valid mobile Number</p>
//           )}
//           <div>
//             <label className="a-form-label">Password</label>
//             <input
//               placeholder="Password"
//               className="a-input-text"
//               type="password"
//               {...register("password", {
//                 required: true,
//                 pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
//               })}
//             />
//           </div>
//           {errors.password && (
//             <p className="error-msg">Please check the Password</p>
//           )}
//           <button type="submit" className="button" onClick={register}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterationModal;
