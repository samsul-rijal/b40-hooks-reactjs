import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import WelcomeAdmin from './WelcomeAdmin';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/welcome-admin" element={<WelcomeAdmin />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App