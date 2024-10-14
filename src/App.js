import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Forget from './components/Forget';
import LoginPage from './components/LoginPage';
import FormPage from './components/FormPage';
// import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route 
                    path="/form" 
                    element={
                        
                            <FormPage />
                        
                    } 
                />
                <Route path="/forgetpassword" element={<Forget />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
