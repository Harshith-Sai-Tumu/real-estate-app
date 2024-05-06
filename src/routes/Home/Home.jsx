import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss"

const Home = ()=>{
    return(
        <div className="home">
          <div className="text">
            <div className="wrap">
                <h1 className="title">
                   Seeking Your Dream Space? Real Estate Offers Abound!
               </h1>
               <p>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, pariatur? Praesentium voluptate quas ipsam atque dolor architecto ipsa possimus, sunt accusantium! Veniam ipsa dolor nihil quis reiciendis incidunt tenetur sunt! 
               </p>
               <SearchBar/>
               <div className="boxContainer">
                 <div className="box">
                  <h1>10+</h1>
                  <h2>Years Of Experience</h2>
                 </div>
                 <div className="box">
                  <h1>2000</h1>
                  <h2>Property Ready</h2>
                 </div>
               </div>
            </div>
          </div>
          <div className="img">
            <img src="./bg.png" alt=""></img>
          </div>
        </div>
    )
}

export default Home;