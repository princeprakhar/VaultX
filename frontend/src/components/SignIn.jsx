import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import InputHandler from './InputHandler';
import {Button} from '@/components/ui/button';
import BottomWarning from './BottomWarning';


const SignIn = () => {
  return <>
    <div className="bg-slate-500 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8  shadow-lg w-96 rounded-xl border-black">
      <Header label = "SignIn"/>
      <SubHeader contents="Enter your information to SignIn" />
      <InputHandler label="Username" type="text" placeholder="Username"/>
      <InputHandler label="Password" type="password" placeholder="password"/>
      <Button className="w-full p-2 mt-2 bg-slate-700 text-blue-500 rounded-xl text-bold hover:bg-slate-500" type="submit">Sign In</Button>
      <BottomWarning contents="Don't have account" link="SignUp" target="/signup"/>
    </div>
    </div>
  </>
}

export default SignIn;