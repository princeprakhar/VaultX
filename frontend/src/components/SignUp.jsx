import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import InputHandler from './InputHandler';
import {Button} from '@/components/ui/button';
import BottomWarning from './BottomWarning';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async() => {
    const response = await axios.post('http://localhost:4001/root/user/signup', {
      firstName,
      lastName,
      username,
      password
    })
    localStorage.setItem('token', response.data.token);
    navigate('dashboard');
  }
  return (
    <div className="bg-slate-400 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <Header label="Sign Up" />
        <SubHeader contents="Enter your information to Register" />  
        <InputHandler onChnage= {
          (e) => {
            setFirstName(e.target.value);
        } }label="First Name" type="text" placeholder="First Name"/>
        <InputHandler onChnage= {
          (e) => {
            setLastName(e.target.value);
        } }
        label="Last Name" type="text" placeholder="Last Name"/>
        <InputHandler onChnage={
          (e) => {
            setUsername(e.target.value);
        }} label="Username" type="text" placeholder="Username"/>
        <InputHandler onChnage = {
          (e) => {
            setPassword(e.target.value);
        }}label="Password" type="password" placeholder="password"/>
        <Button onClick={handleSubmit} className="w-full p-2 mt-2 bg-slate-700 text-blue-500 rounded-xl text-bold hover:bg-slate-500" type="submit">Sign Up</Button>
        <BottomWarning contents="Already have account" link="SignIn" target="/signin"/>
      </div>
    </div>
  );
}

export default SignUp;