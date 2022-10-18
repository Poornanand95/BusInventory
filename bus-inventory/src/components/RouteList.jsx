import React from 'react'
import Card from './Card'
import './routeList.css'
import { Link } from 'react-router-dom';
function RouteList({dispatch, routes}) {
  return (
    <div className='route_wrapper'>
      <div className='upper_wrapper'>
        <p className='message_text'>Easily, maintain all <span className='message_highlight'>bus routes</span> list here !</p>
        <Link to="/createroute">
          <button className='submit_btn' >Create new route</button>
        </Link>
        <p className='message_text'>Available Routes</p>
      </div>
      {routes.length > 0 ? 
        routes.map((eachRoute) => {
        return (<Card dispatch={dispatch} key={eachRoute.routeId} eachRoute={eachRoute}/>)
        })
        : <div style={{"height": "50vh"}}>Currently no routes to show!</div>}
    </div>
  )
}

export default RouteList