import React,  { useEffect }  from 'react';
import "./App.css";
import Login from './pages/LoginPage';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() { 

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
