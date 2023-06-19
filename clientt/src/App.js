import './App.css';
import {Routes, Route } from "react-router-dom";
import { Chat } from './pages/Chat';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/Auth/Login';
import Confirm from './pages/Auth/Confirm';
import RegisterPage from './pages/Auth/RegisterPage';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Chat />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/api/webuser/register" element={<RegisterPage />} />
      <Route path="/api/webuser/confirm" element={<Confirm />} />
    </Route>
  </Routes>
  );
}

export default App;
