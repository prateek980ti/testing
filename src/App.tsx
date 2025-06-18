import './App.css'
import Choose from './components/ChooseUs/Choose'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Landing from './pages/Landing';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
      <Choose/>
      <Router>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Landing />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App



