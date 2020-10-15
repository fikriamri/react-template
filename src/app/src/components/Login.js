import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { login } from '../redux/Auth/action';
import { useDispatch } from 'react-redux';

const clientId = '1065044378193-0taje5hmiiogsd12b8vbhcokoa1a5omu.apps.googleusercontent.com';

export default function Login(props) {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res);
    dispatch(login(res.accessToken, res.profileObj))
    console.log('res', res)
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res:', res)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}
