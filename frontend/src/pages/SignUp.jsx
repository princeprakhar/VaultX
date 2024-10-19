import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import InputHandler from "@/components/InputHandler";
import { Button } from "@/components/ui/button";
import BottomWarning from "@/components/BottomWarning";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Navabar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const apiUrl = "http://localhost:4001/root/user/signup";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, {
        username,
        password,
        firstName,
        lastName,
      });
      toast.success("User created successfully. Please login to continue.");
      navigate("/signin");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            toast.error("User already exists. Try with a different username.");
            break;
          case 400:
            toast.error("Invalid request. Please try again.");
            break;
          default:
            toast.error("Something went wrong. Please try again.");
            break;
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Navabar />
      <div className="bg-slate-400 shadow-md border rounded-xl m-1 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <Header label="Sign Up" />
          <SubHeader contents="Enter your information to Register" />
          <InputHandler
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            label="First Name"
            placeholder="First Name"
          />
          <InputHandler
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            label="Last Name"
            placeholder="Last Name"
          />
          <InputHandler
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            label="Username"
            placeholder="Username"
          />
          <InputHandler
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            label="Password"
            placeholder="password"
          />
          <Button
            onClick={handleSubmit}
            className="w-full p-2 mt-2 bg-slate-700 text-blue-500 rounded-xl text-bold hover:bg-slate-500"
            type="submit"
          >
            Sign Up
          </Button>
          <BottomWarning
            contents="Already have account"
            link="SignIn"
            target="/signin"
          />
        </div>
        <Toaster position="bottom-right" />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
