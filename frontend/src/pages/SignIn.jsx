import React, { useState } from 'react';
import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';
import InputHandler from '@/components/InputHandler';
import { Button } from '@/components/ui/button';
import BottomWarning from '@/components/BottomWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:4001/root/user/signin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error('Invalid creditial. Please try again.');
            break;
          default:
            toast.error('Something went wrong. Please try again.');
            break;
        }
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="bg-slate-400 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-lg w-96 rounded-xl border-black">
        <Header label="SignIn" />
        <SubHeader contents="Enter your information to SignIn" />
        <form onSubmit={handleSubmit}>
          <InputHandler
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            type="text"
            placeholder="Username"
          />
          <InputHandler
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="password"
          />
          <Button 
            className="w-full p-2 mt-2 bg-slate-700 text-blue-500 rounded-xl text-bold hover:bg-slate-500" 
            type="submit"
          >
            Sign In
          </Button>
        </form>
        <BottomWarning contents="Don't have account" link="SignUp" target="/signup" />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default SignIn;