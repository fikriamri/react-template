import React from 'react';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import { login } from '../redux/Auth/action';
import { useDispatch, useSelector } from 'react-redux';

const clientId = '1065044378193-0taje5hmiiogsd12b8vbhcokoa1a5omu.apps.googleusercontent.com';

export default function Login(props) {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res);
    dispatch(login(res.accessToken, res.profileObj))
    console.log('res', res)
    // console.log('res', res.getAuthResponse().id_token)
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res:', res)
  }

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   isSignedIn: true,
  //   accessType: 'offline',
  // })

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login-button">
        //     Login coy
        //   </button>
        // )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      {/* <button onClick={signIn}>
        Sign in with Google
      </button> */}
    </div>
  )
}