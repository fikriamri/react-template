import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '1065044378193-0taje5hmiiogsd12b8vbhcokoa1a5omu.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      response: {},
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        response
      }));
    }
    console.log('login', response)
    console.log('If this message appear, it means that this method is called by GoogleLogin button with props isSignIn={true} when you first access the page')
    console.log('But it won\'t auto relogin when you logged out from your account')
    /**
     * Next aku akan membuat komponen login dan logout yang terpisah mengikuti artikel di dev.to, dan menerapkan refreshToken.
     * Setelah itu aku akan langsung mengerjakan report progress.
     * Mungkin bisa jadi opsi juga:
     * - User akan selalu login (dengan refresh token) selama ia tidak keluar dari aplikasi/masih ada tab yang terbuka (fungsi refresh token jalan terus).
     *   Tapi saat ia keluar, ia harus relogin (tanpa props isSignedIn)
     * - User akan selalu login kapanpun, selama gmail-nya masih login (menggunakan props isSignedIn) - seperti gmail dan semua aplikasi dari Google
     */
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    console.log('logout', response)
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
    console.log(response)
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
    console.log(response)
  }

  render() {
    console.log('isLogined', this.state.isLogined)
    return (
    <div>
      { this.state.isLogined 
        ? <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        />
        : <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={true}
        />
      }
      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }
      {/* {JSON.stringify(this.state.response)} */}
    </div>
    )
  }
}

export default GoogleBtn;