import "./list.scss"
import { listData } from "../../libraries/dummyData"
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map"
const List =()=>{

    const data = listData

    return(
        <div className="list">
          <div className="listcontainer">
            <div className="wrap">
                <Filter/>
                {data.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
          </div>
          <div className="mapcontainer">
            <Map/>
          </div>
        </div>
    )
}

export default List;