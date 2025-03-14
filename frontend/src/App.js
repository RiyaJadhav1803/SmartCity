import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/complaints' element={<ComplaintList />} />
                <Route path='/submit-complaint' element={<ComplaintForm />} />
                <Route path='/admin' element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
