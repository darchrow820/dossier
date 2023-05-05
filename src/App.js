// import logo from './logo.svg';
import './App.scss';
import './fonts.css';
import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index';
import Navbar from './components/Navbar/navbar'
import Approuter from './components/AppRouter/Approuter'
import Search from './components/Search/search';
import Loader from './components/Loader/Loader'

function App() {

  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Approuter />
        {/* <Search /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
