import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={ Login }/>
        <Route path="/signup" Component={ SignUp } />
        <Route exact path="/" Component={ MainPage }/>
      </Routes>
    </Router>
  );
}