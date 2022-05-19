import React from 'react';
import { useEffect } from 'react';
import AccountManager from '../components/AccountManager';
import { useSelector } from 'react-redux';
import SingUp from '../components/Sing-Up';

function Signup() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
    {username === null ? <p></p> : <AccountManager />}
    <SingUp/>
    </div>
  );
	
}

export default Signup