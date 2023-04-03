// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Approuter from './components/AppRouter/Approuter'
import Search from './components/Search/search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Approuter />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Search />
      </div>
    </BrowserRouter>
  );
}

export default App;
