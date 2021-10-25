
import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import UserAuthenticated from './UserAuthenticated';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ?(
        <>
        <UserAuthenticated/>
        <LogoutButton/>
        </>
      ):
      <>
      <LoginButton/>
      </>}

    </div>
  );
}

export default App;
