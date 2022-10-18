import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import CreateRoute from './pages/CreateRoute';
import { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { manageState } from "./reducers/createroute-reducer";
import popularRoutes from "./popularRoutes.json"
function App() {
  let initialState = localStorage.getItem("routes")?JSON.parse(localStorage.getItem('routes')) : [popularRoutes];
  const [routes, dispatch] = useReducer(manageState, initialState);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home dispatch={dispatch} routes={routes}/>} />
          <Route path="/createroute" element={<CreateRoute dispatch={dispatch} routes={routes}/>} />
          <Route path="/mapsView" element={<MapPage routes={routes}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
