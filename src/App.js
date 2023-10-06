import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

function App() {

useEffect({},[])

  return (
    <div className="App">
      <FacebookLogin
    appId="1680733605754642"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
    </div>
  );
}

export default App;
