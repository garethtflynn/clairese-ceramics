import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Login />
        <Signup />
      </div>
    </div>
  );
}

export default App;
