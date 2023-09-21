import React,  { useEffect }  from 'react';
import "./App.css";
import Login from './pages/LoginPage';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { useAuth0 } from "@auth0/auth0-react";


function App() { 
  const { isAuthenticated } = useAuth0();
  useEffect (() => {
    const correctDomain = 'https://hng-third-task-con2.vercel.app';
    if(!isAuthenticated){
      if (window.location.origin !== correctDomain) {
        window.location.href = correctDomain;
      }
    }
  }, []);
  return (
    <div>
      <Nav />
      <Login />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
