import React,  { useEffect }  from 'react';
import "./App.css";
import Login from './pages/LoginPage';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() { 

  useEffect (() => {
    const correctDomain = 'https://hng-third-task-con2.vercel.app/';

    if (window.location.href !== correctDomain) {
      window.location.href = correctDomain;
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
