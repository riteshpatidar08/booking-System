import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Toaster richColors />
     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route element={<PrivateRoute allowedRole={['admin']} />}>
            <Route path="/dashboard/*" element={<DashBoard />} />
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
