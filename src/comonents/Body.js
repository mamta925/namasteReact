import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
  
export const Body = () => {
  const[listOfRestaurants, setListOfRestaurants]  = useState([])
  useEffect( ()=> {
    fetchData()
      }, [])
      const fetchData = async()=>{
        const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json =  await data.json();
        console.log(json)
        setListOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
          )
      }
      if(listOfRestaurants.length ===0){
        return <Shimmer/>
      }

      // const onlineStatus = useOnlineStatus();
      // if(onlineStatus === false) {
      //   return (
      //     <div>You are offline</div>
      //   )
      // }
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
               const filterList = listOfRestaurants.filter((res)=> res.info.avgRating>4)
               setListOfRestaurants(filterList)
          }}> Top Rated Restaurant </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
           <Link key={restaurant.info.id} 
           to={"/restaurants/"+restaurant.info.id}> 
              <RestaurantCard  resData={restaurant} />
           </Link>
          ))}
        </div>
      </div>
    );
  };