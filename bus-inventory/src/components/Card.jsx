import React from 'react'
import travelImg from '../assets/travel.jpg'
import './card.css'
import { Link } from 'react-router-dom';

function Card({dispatch, eachRoute}) {

  const handleRouteDeleteClick =(routeId) => {
    dispatch({
        type: "DELETE_COMPLETE_ROUTE",
        payload: {routeId: routeId}
      });
  }  
  return (
    <div className='card_wrapper'>
        <div className="fixed-height-img">
            <img className="travel_img" alt="travel" src={travelImg} width ="100%"></img>
        </div>
        <div className="card_details">
            <div className='heading_wrapper'>
                <h3 className='card_heading'>{eachRoute.routeName}</h3>
                <strong>{eachRoute.direction}</strong>
                <div className='edit_tools_icon'>
                    <Link to={"/createroute?id=" + eachRoute.routeId}>
                        <i className="fa-regular fa-pen-to-square edit"></i>
                    </Link>
                    <i className="fa-regular fa-square-minus delete" onClick={() => handleRouteDeleteClick(eachRoute.routeId)}></i>
                </div>
            </div>
            <div>( {eachRoute.status} )</div>
            <span className='stops_mssg'>Stops in this route</span>
            <span className='stops_count'>{eachRoute.stops.length}</span>
            <ul className='stops_list'>
            {eachRoute.stops.map((eachStop) => {
                return (<li key={eachStop.name}>{eachStop.name}</li>)
            })}
            </ul>   
        </div>
        <div className='navigate_map'>
            <div>
            <Link to={"/mapsView?id=" + eachRoute.routeId} className='map_link'>
                <span className='map_message'>open in maps</span>
                <i className="fa-solid fa-arrow-right map_arrow"></i>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Card