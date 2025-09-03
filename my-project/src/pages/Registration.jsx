import React, { useState } from "react";
import Container from "../component/Container";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import img from "../assets/registration.jpg";
import axios from "axios";
import RegistrationPatient from "./RegistrationPatient";
const Registration = () => {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [errormail, setErrormail] = useState("");
  const [errortext, setEerrorText] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const [errrorspe, setErrorSpe] = useState("");
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    let isValid = true; // Track validity of all inputs
    const { name, email, password, specialization } = fromData;
    // Email validation
    if (!email) {
      setErrormail("Enter a mail here");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrormail("Invalid email format.");
      isValid = false;
    } else {
      setErrormail(""); // Clear error if email is valid
    }

    // Text validation
    if (!name) {
      setEerrorText("Enter a name");
      isValid = false;
    } else {
      setEerrorText(""); // Clear error if text is valid
    }

    // Password validation
    if (!password) {
      setErrorPassword("Please enter your password.");
      isValid = false;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setErrorPassword("Password must include at least one uppercase letter.");
      isValid = false;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setErrorPassword("Password must include at least one lowercase letter.");
      isValid = false;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setErrorPassword("Password must include at least one digit.");
      isValid = false;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrorPassword("Password must include at least one special character.");
      isValid = false;
    } else if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setErrorPassword(""); // Clear error if password is valid
    }

    if (!specialization) {
      setErrorSpe("specialization not required");
    } else {
      setErrorSpe("");
    }

    if (isValid) {
      const res = await axios.post(
        "https://appointment-manager-node.onrender.com/api/v1/auth/register/doctor",
        fromData
      );

      toast.success("Registration successful ✅");
      console.log("Response:", res.data);
      setTimeout(() => {
        navigate("/login")
      },200);
    }
  };
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Right Form */}
          <div className="w-full lg:w-1/2 px-6 sm:px-10">
            <h1 className="text-[28px] sm:text-[34px] text-center font-bold">
              Sign Up
            </h1>
            <p className="text-sm sm:text-base text-center text-gray-500 mb-8 mt-2">
              Please fill the form to create an account Doctor.
            </p>

            {/* Full Name */}
            <div className="mb-5">
              <label className="font-medium">Full Name</label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter your full name"
              />
              <div className="text-red-600 font-medium text-[16px]">
                {errortext}
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="font-medium">Email Address</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter your email address"
              />
              <div className="text-red-600 font-medium text-[16px]">
                {errormail}
              </div>
            </div>

            {/* Password */}
            <div className="relative mb-5">
              <label className="font-medium">Password</label>
              <input
                name="password"
                onChange={handleChange}
                type={show ? "text" : "password"}
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="********"
              />
              <div className="text-red-600 font-medium text-[16px]">
                {errorpassword}
              </div>
              <div
                className="absolute top-[52%] right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <FaEye className="text-lg" />
                ) : (
                  <FaEyeSlash className="text-lg" />
                )}
              </div>
            </div>
            {/* // specialization */}
            <div className="mb-5">
              <label className="font-medium">Specialization</label>
              <input
                name="specialization"
                onChange={handleChange}
                type="text"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter specialization"
              />
              <div className="text-red-600 font-medium text-[16px]">
                {errrorspe}
              </div>
            </div>
            {/* photo url */}
            <div className="mb-5">
              <label className="font-medium">Photo_url</label>
              <input
                name="photo"
                onChange={handleChange}
                type="text"
                className="w-full mt-2 py-3 px-4 shadow-md rounded-md outline-none placeholder:text-gray-400"
                placeholder="Enter Photo_url"
              />
            </div>
            {/* Sign Up Button */}
            <button
              onClick={handleClick}
              className="w-full bg-[#60e5ae] text-black font-semibold text-[17px] py-3 rounded-md hover:bg-[#4ad49b] transition"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="w-1/4 h-px bg-gray-400"></div>
              <p className="mx-4 text-gray-500 text-sm">OR</p>
              <div className="w-1/4 h-px bg-gray-400"></div>
            </div>

            {/* Login Redirect */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-black font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
            <div className="text-end font-normal text-blue-500 mt-5">
              <Link
                to="/registrationPatient"
                className="text-black font-medium hover:underline bg-[#60b9e5] py-4 px-5 rounded-md"
              >
                RegistrationPatient
              </Link>
            </div>
          </div>

          {/* Left Image */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <img
              src={img}
              alt="Registration"
              className="w-full h-auto lg:h-screen object-cover rounded-lg"
            />
          </div>
        </div>

        <Toaster />
      </Container>
    </div>
  );
};

export default Registration;
