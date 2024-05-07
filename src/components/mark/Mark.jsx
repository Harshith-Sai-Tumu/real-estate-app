import { Marker, Popup } from "react-leaflet";
import "./mark.scss"
import { Link } from "react-router-dom";

const Mark = ({item})=>{
    return(
        
            <Marker position={[item.latitude,item.longitude]} className="marker">
                  <Popup>
                    <div className="popupContainer">
                        <img src={item.img} alt="" />
                        <div className="textContainer">
                            <Link to={`/${item.id}`} >{item.title}</Link>
                            <span className="bed">{item.bedroom} Bedrooms</span>
                            <b>$ {item.price}</b>
                        </div>
                    </div>
                  </Popup>
            </Marker>
       
    )
}

export default Mark;