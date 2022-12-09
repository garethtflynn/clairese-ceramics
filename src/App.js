import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Login />
        <Signup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
