import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import AdminDashboardScreen from './FrontEnd/Screens/AdminDashboardScreen';
import AdminEditProduct from './FrontEnd/Screens/AdminEditProductScreen';
import HomeScreen from './FrontEnd/Screens/HomeScreen';
import LoginScreen from './FrontEnd/Screens/LoginScreen';


function App() {
  return (
    <>
      <Router>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/admin' component={AdminDashboardScreen} exact />
        <Route path='/admin/product/:id/edit' component={AdminEditProduct} />
      </Router>
    </>)
}
export default App
