import './App.css'

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Landing from './pages/Landing';
import Login from './components/Login';
import Register from './components/Register';
import UploadContainer from './components/Dropbox/UploadContainer';
import Main from './pages/MainPage';


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Landing />} />
            <Route path='/file' element={<UploadContainer/>} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='main' element={<Main />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
