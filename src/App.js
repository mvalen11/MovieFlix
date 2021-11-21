import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Movies from './pages/movies';
import News from './pages/news';
import MyList from './pages/my-list';
import Account from './pages/account';
import SignUp from './pages/signup';

function App() {
  return (
   

    <Router>
      <div>
    
      <Navbar />
        <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/news" element={<News/>} />
        <Route path='/my-list' element={<MyList/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        </div>
    </Router>
    

    
  );
}

const Home = () => {
<div>
  <h1> 
    Home Page JJ
  </h1>
</div>
}

export default App;
