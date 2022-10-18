import React from 'react';
import Maps from "../map/Map";
function MapPage(props) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const routeId = urlParams.get("id");
    let currentRoute = routeId ? props.routes.filter((eachRoute) =>{
        return eachRoute.routeId === routeId;
    })[0] : {};
    let stopsList = currentRoute.stops;
    let stops = stopsList.map((eachStop) => {
        return {
            latitude: eachStop.lat,
            longitude: eachStop.log,
        }
    })
  return (<>
    <Maps stops={stops}/>
  </>
  )
}

export default MapPage