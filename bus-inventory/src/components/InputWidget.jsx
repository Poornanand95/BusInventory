import React, {useEffect, useState} from 'react';
import './input.css';

function InputWidget({dispatch, route}) {
  const [routeName, setRouteName] = useState ("");
  const [stopName, setStopName] = useState ("");
  const [stopLat, setStopLat] = useState ("");
  const [stopLog, setStopLog] = useState ("");
  const [stopPoints, setStopPoints] = useState ([]);
  const [routeId, setRouteId] = useState ("");

  useEffect(() => {
    if (Object.keys(route).length) {
      setRouteName(route.routeName);
      let stopsList = route.stops;
      setStopPoints([...stopsList])
      setRouteId(route.routeId);
    }
  },[])
  const handleClick = () => {
    let direction = document.getElementById("direction").value;
    let status = document.getElementById("status").value;
    if (routeName) {
      let singleRoute = {
          routeName: routeName || '',
          direction: direction,
          routeId: routeId,
          status: status,
          stops: [...stopPoints],
      }
      if (singleRoute.stops.length < 2) {
        alert("Enter atleast two stop points!")
      } else {
        if (singleRoute.routeId) {
          dispatch({
            type: "DELETE_COMPLETE_ROUTE",
            payload: {routeId: singleRoute.routeId}
          });
          dispatch({
            type: "ADD_COMPLETE_ROUTE",
            payload: {singleRoute: singleRoute}
          });
        } else {
          dispatch({
            type: "ADD_COMPLETE_ROUTE",
            payload: {singleRoute: singleRoute}
          });
        }
        setStopName("");
        setStopLat("");
        setStopLog("");
        setRouteName("");
        setStopPoints([]);
      }
    } else {
      alert("fill all fields for route");
    }
  }
  const handleOnChange = (e, type) => {
    switch(type) {
      case "routeName":
        setRouteName(e.target.value);
        break;
      case "stopName":
        setStopName(e.target.value);
        break;
      case "stopLat":
        setStopLat(e.target.value);
        break;
      case "stopLog":
        setStopLog(e.target.value);
        break;
      default:
        // code block
    }
    
  }
  const handleStopAddClick = () => {
    if (stopName && stopLat && stopLog) {
      let stopPoint = {
        name: stopName,
        lat: stopLat,
        log: stopLog,
      }
      setStopPoints(prevPoints => [...prevPoints, stopPoint]);
      setStopName("");
      setStopLat("");
      setStopLog("");
    } else {
      alert("fill all fields");
    }
  }
  const handleStopDeleteClick = (stopName) => {
    if (stopName) {
      let newStopPoints = stopPoints.filter((eachStop) => eachStop.name != stopName );
      setStopPoints([...newStopPoints]);
    }
  }
  return (
    <div className='widget_wrapper'>
        <div className="form_wrapper">
            <input 
              className="input_field" 
              autocomplete="off" 
              placeholder="Route Name" 
              value={routeName} 
              onChange={(e) => handleOnChange(e, "routeName")}>
            </input>
            <select className="direction" id="direction" name="direction">
                <option value="up">Up</option>
                <option value="down">Down</option>
            </select>
            <select className="status" id="status" name="status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
        <div className="stop_points_wrap">
          <input 
              className="input_field stop_point_name" 
              autocomplete="off" 
              placeholder="Stop point name" 
              value={stopName} 
              onChange={(e) => handleOnChange(e, "stopName")}>
          </input>
          <div className='lat_log_wrap'>
            <input 
                className="input_field stop_point_lat" 
                autocomplete="off" 
                placeholder="Point latitude" 
                value={stopLat} 
                onChange={(e) => handleOnChange(e, "stopLat")}>
            </input>
            <input 
                className="input_field stop_point_log" 
                autocomplete="off" 
                placeholder="Point longitude" 
                value={stopLog} 
                onChange={(e) => handleOnChange(e, "stopLog")}>
            </input>
          </div>
          <button className='submit_btn' onClick={handleStopAddClick}>Add Stoping points</button>
        </div>
        <div className='stops_list'>
          {stopPoints.map((eachStop) => {
            return (<div className='stop_details'>
              <div className='stop_text'>
                <strong>{eachStop.name} </strong>
                <span> Lat : {eachStop.lat} , </span>
                <span> Long : {eachStop.log}</span>
              </div>
              <i className="fa-solid fa-square-minus stop_delete_icon" onClick={() => handleStopDeleteClick(eachStop.name)}></i>
            </div>)
          })}
        </div>
        <button className='submit_btn' onClick={handleClick}>{routeId ? "Edit Route" : "Add route"}</button>
    </div>
  )
}

export default InputWidget