import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss"
import "leaflet/dist/leaflet.css"
import Mark from "../mark/Mark";
const Map =({items})=>{
    return(
        <div className="map">
            <MapContainer center={[17.79041998823318, 83.3837817211428]} zoom={7} scrollWheelZoom={false} className="map">
                <TileLayer
                  attribution=
                  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>    

                {items.map(item=>(
                  <Mark item={item} key={item.id}/>
                ))}  
            </MapContainer>
        </div>
    )
}

export default Map;