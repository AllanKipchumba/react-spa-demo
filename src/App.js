import React, { useState } from 'react';
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('Guest');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path='/' element={<Home username={username} />} />
          <Route path='/about' element={<About username={username} />} />
        </Routes>

        <div className='input-field'>
          <label>Set Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
