import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { OAuthCallback } from './pages/Login/OAuthCallback';
import { SignUp } from './pages/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kakao/callback" element={<OAuthCallback />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
