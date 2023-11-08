import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";

  
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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };