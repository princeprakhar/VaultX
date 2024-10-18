import React from 'react';
import AppBar from '@/components/AppBar';
import Balance from '@/components/Balance';
import UserDetails from '@/components/UserDetails';

const DashBoard = ()=>{
    return(
        <div>
            <AppBar/>
            <Balance value = {2000}/>
            <UserDetails/>
        </div>
    )
}
export default DashBoard;