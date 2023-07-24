import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaUserCircle,
  FaLock,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { BsCalendarHeart } from "react-icons/bs";
import registerImage from "../../assets/register.png";
import logImage from "../../assets/log.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { caseSuccess } from "../userSlice";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [containerClass, setContainerClass] = useState("");

  const navigate = useNavigate();

  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState(0);
  const [emailId, setEmailId] = useState("");

  const SignUp = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/", {
        username: signupUsername,
        identificationNumber: identificationNumber,
        email: emailId,
        password: signupPassword,
      })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        setContainerClass("");
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const handleSignUp = () => {
    setContainerClass("sign-up-mode");
  };

  const handleSignIn = () => {
    setContainerClass("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8080/" + username);
      if (password === response.data && password.length !== 0) {
        sessionStorage.setItem('isLoggedIn', true);
        navigate("/");
      } else {
        alert("Check username or password!")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`container ${containerClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="user">
                {" "}
                <FaUserCircle />{" "}
              </i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <a type="submit" href="/" value="Login" className="btnm">
              Login
            </a> */}
            <input type="submit" className="btnm" value="Login"/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form" onSubmit={SignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUserCircle />
              </i>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setSignupUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <IoDocumentText />
              </i>
              <input
                type="number"
                placeholder="Identification Number"
                onChange={(e) => {
                  setIdentificationNumber(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <BiLogoGmail />
              </i>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </div>
            {/* <div className="input-field">
              <i className="fas fa-lock">
                <FaLock />
              </i>
              <input type="password" placeholder="Confirm Password" />
            </div> */}
            <input type="submit" className="btnm" value="Sign up" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              "Say goodbye to late fees and paperwork – sign up now and simplify
              your bill payments with our intuitive online platform!"
            </p>
            <button className="btn transparent" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
          <img src={logImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already Have an Account?</h3>
            <p>
              "Effortlessly manage your bills from anywhere – log in today and
              enjoy the convenience of secure and seamless online payments!"
            </p>
            <button className="btn transparent" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
