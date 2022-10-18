import React from 'react'
import InputWidget from '../components/InputWidget';

function CreateRoute(props) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const routeId = urlParams.get("id");
    let currentRoute = routeId ? props.routes.filter((eachRoute) =>{
        return eachRoute.routeId === routeId;
    })[0] : {};
  return (
    <div>
        <InputWidget dispatch={props.dispatch} route={currentRoute}/>  
    </div>
  )
}

export default CreateRoute