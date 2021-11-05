
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from './components/Layout';
import UserAuthenticated from "./components/adminArea/UserAuthenticated"
import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    
      <Layout>
      <div className="App">
      {isAuthenticated ?(
        <UserAuthenticated/>
      ):
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserAuthenticated />} />
          </Routes>
        </BrowserRouter>
      }
        </div>
      </Layout>
    
  );
}

export default App;
