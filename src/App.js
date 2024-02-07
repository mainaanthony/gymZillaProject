import LandingPage from '../src/Landing/landingPage';
import SignUp from './components/SignUp';
import Home from './components/Home'
import LoginPage from '../src/components/Login'
import logo from './logo.svg';
import './App.css';

 function App() {
   return (
     <div className="App">

     {/* <LoginPage/> */}
     <Home/>
     {/* <SignUp/> */}
     {/* <LandingPage /> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     </div>
   );
 }