import React from 'react';
import AppBar from './AppBar';
import Balance from './Balance';
import UserDetails from './UserDetails';

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