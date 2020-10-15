import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/Auth/action';

const clientId = '1065044378193-0taje5hmiiogsd12b8vbhcokoa1a5omu.apps.googleusercontent.com';

export default function Logout() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    alert('Logout made successfully');
    dispatch(logout())
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}
