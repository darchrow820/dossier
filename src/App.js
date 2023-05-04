// import logo from './logo.svg';
import './App.scss';
import './fonts.css';
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
        {/* <Search /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
