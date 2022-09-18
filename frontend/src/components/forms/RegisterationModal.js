import React from "react";
import "../styles/registration.css";
import { ImCross } from "react-icons/im";
// import {showModal, setShowModal} from "../Navigationbar";
import useForm from "../useForm";

const RegisterationModal = ({ closeModal }) => {

  const formLogin = () => {
    console.log("Callback function when form is submitted")
    console.log("From Values", values);
  }

  const {handleChange, values, errors, handleSubmit } = useForm(formLogin);


  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="outer-div">
            <div className="inner-div">
              <span>
                <ImCross onClick={() => closeModal(false)} />
              </span>

              <div className="form-info">
                <h1>Register</h1>
                <div className="a-row Name">
                  <label className="a-form-label">
                    Your name
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="First and Last name"
                    name="username"
                    className="a-input-text"
                    onChange={handleChange}
                  />
                </div>
                {
                  errors.username && <h6>{errors.username}</h6>
                }

                <div className="a-row mobile-number">
                  <label className="a-form-label">Mobile number</label>
                  
                    {/* <label className='mobile-label-area'>IN +91</label> */}
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      name="tel"
                      className="a-input-text a-spacing-micro"
                      onChange={handleChange}
                    />
                  </div>
                  {
                  errors.tel && <h6>{errors.tel}</h6>
                }

                <div className=" a-row Email">
                  <label className="a-form-label">Email</label>
                  <br />
                  <input
                    type="email"
                    autoComplete="email"
                    name="email"
                    placeholder="Enter the Email.."
                    className="a-input-text a-span12"
                    onChange={handleChange}
                  ></input>
                </div>
                {
                  errors.email && <h6>{errors.email}</h6>
                }

                <div className="a-row password">
                  <label className="a-form-label">Password</label>
                  <br />
                  <input
                    type="password"
                    maxLength="8"
                    placeholder="At least 6 characters"
                    name="password"
                    required
                    className="a-input-text a-span12"
                    onChange={handleChange}
                  />
                  {/* <div class="a-box-inner a-alert-container">
                    <div class="a-alert-content">
                      Passwords must be at least 8 characters.
                    </div>
                  </div> */}
                </div>
                {
                  errors.password && <h6>{errors.password}</h6>
                }
                <button type='submit' value="Submit" className="create-acc-btn">Create a Account</button>
              </div>
  

            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterationModal;
