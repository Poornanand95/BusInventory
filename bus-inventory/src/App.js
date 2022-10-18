import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import CreateRoute from './pages/CreateRoute';
import { useReducer } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { manageState } from "./reducers/createroute-reducer";

function App() {
  const popularRoute = {
    direction: "up",
    routeId: "4cefeaed-68ac-4475-aef1-462ff47790df",
    routeName: "Delhi to Lucknow",
    status: "active",
    stops: [
      {
        lat: "26.85",
        log: "80.949",
        name: "Lucknow City"
      },
      {
        lat: "28.644",
        log: "77.216",
        name: "Delhi City"
      }
    ]
  }
  const initialState = [popularRoute];
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
