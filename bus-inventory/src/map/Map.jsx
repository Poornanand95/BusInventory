import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Routing from "./Routing";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import './map.css'

const srcIcon = new Icon({
  iconUrl: "/icons/location-pin.png",
  iconSize: [25, 25],
});
const destIcon = new Icon({
  iconUrl: "/icons/destination-map-icon.svg",
  iconSize: [25, 25],
});
const Maps = ({stops}) => {
  return (
    <MapContainer
      className='mapContainer'
      style={{ width: "100%", height: "80vh" }}
      zoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[Number(stops[0].latitude), Number(stops[0].longitude)]}
        icon={srcIcon}
      />
      <Marker
        position={[
          Number(stops[stops?.length - 1].latitude),
          Number(stops[stops?.length - 1].longitude),
        ]}
        icon={destIcon}
      />
      <Routing stops={stops} />
    </MapContainer>
  );
};

export default Maps;
