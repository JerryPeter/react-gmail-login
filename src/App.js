import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)

    let msg = `Welcome : ${response.profileObj.name} \nEmail: ${response.profileObj.email}`
    alert(msg)
  }

  render() {
    return (
      <div>
        <GoogleLogin 
        clientId="87013480103-lln71b3skbksg7fgdj44vqqfedea971g.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default App;