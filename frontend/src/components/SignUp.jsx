import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import InputHandler from './InputHandler';
import {Button} from '@/components/ui/button';
import BottomWarning from './BottomWarning';

const SignUp = () => {
  return (
    <div className="bg-slate-500 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <Header label="Sign Up" />
        <SubHeader contents="Enter your information to Register" />  
        <InputHandler label="First Name" type="text" placeholder="First Name"/>
        <InputHandler label="Last Name" type="text" placeholder="Last Name"/>
        <InputHandler label="Username" type="text" placeholder="Username"/>
        <InputHandler label="Password" type="password" placeholder="password"/>
        <Button className="w-full p-2 mt-2 bg-slate-700 text-blue-500 rounded-xl text-bold hover:bg-slate-500" type="submit">Sign Up</Button>
        <BottomWarning contents="Already have account" link="SignIn" target="/signin"/>
      </div>
    </div>
  );
}

export default SignUp;