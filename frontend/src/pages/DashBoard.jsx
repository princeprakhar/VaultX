import React from 'react';
import AppBar from '@/components/AppBar';
import Balance from '@/components/Balance';
import UserDetails from '@/components/UserDetails';
import Footer from '@/components/Footer';

const DashBoard = ()=>{
    console.log(localStorage.getItem('token'));
    return(
        <>
        <div>
            <AppBar/>
            <Balance value = {2000}/>
            <UserDetails/>
        </div>
        
        <Footer/>
        </>
    )
}
export default DashBoard;