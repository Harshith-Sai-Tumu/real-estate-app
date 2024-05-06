import { useState } from 'react';
import './searchbar.scss'

const types =["buy","rent"]

const SearchBar=()=>{
    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    })

    const switchType=(v)=>{
       setQuery((prev) => ({...prev,type:v}))
    }

    return(
        <div className="searchBar">
            <div className="type">
              {
                types.map((type)=>(
                    <button key={type} onClick={()=> switchType(type)} className={query.type===type ? "active" : ""}>{type}</button>
                ))
              }
            </div>
            <form >
                <input type="text" name="location" placeholder="Enter city location"></input>
                <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min Price"></input>
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price"></input>
                <button>
                    <img src="./search.png" alt=""/>
                </button>
            </form>
        </div>
    )
}
export default SearchBar;