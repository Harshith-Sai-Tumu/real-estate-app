import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss"
import "leaflet/dist/leaflet.css"
const Map =()=>{
    return(
        <div className="map">
            <MapContainer center={[16.52225758195353, 80.65250057680309]} zoom={7} scrollWheelZoom={false} className="map">
       <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={[16.52225758195353, 80.65250057680309]} className="marker">
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
    )
}

export default Map;