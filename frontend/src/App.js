import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import ProtectedRoute from "./components/ProtectedRoute"; // New protected route
import AdminLogin from './components/AdminLogin';

const pageTransition = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route
                    path='/'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path='/login'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <Login />
                        </motion.div>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <Register />
                        </motion.div>
                    }
                />
                <Route
                    path='/complaints'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <ProtectedRoute>
                                <ComplaintList />
                            </ProtectedRoute>
                        </motion.div>
                    }
                />
                <Route
                    path='/submit-complaint'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <ComplaintForm />
                        </motion.div>
                    }
                />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route
                    path='/admin-dashboard'
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }}
                        >
                            <AdminDashboard />
                        </motion.div>
                    }
                />
                
                 {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
