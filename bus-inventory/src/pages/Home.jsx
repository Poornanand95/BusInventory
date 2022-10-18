import React from 'react'
import RouteList from '../components/RouteList';


function Home(props) {
  return (
    <div>
    <RouteList dispatch={props.dispatch} routes={props.routes} />
    </div>
  )
}

export default Home