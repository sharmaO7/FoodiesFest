import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import resList from "../utils/mockData";
import axios from "axios";
import { withPromotedLabel } from "./RestaurantCard.jsx";
import UserContext from "../utils/UserContext.jsx";


const Body = () => {
  //state variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4896899&lng=77.4990442&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards)
    // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
    const vai =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(vai); //cards[0].card.card

    setListOfRestaurants(vai);
    setfilteredRestaurant(vai);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connnection.
      </h1>
    );

  const {loggedInUser, setUserName} = useContext(UserContext);

  //conditional rendering :
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  // let ListOfRestaurants = [
  // if(ListOfRestaurants.length===0)return <><h1>hello</h1></>
  //   {
  //     info: {
  //       id: "537139",
  //       name: "Narmada Chain of Restaurant",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Biryani", "Andhra", "South Indian"],
  //       avgRating: 4.5,
  //       avgRatingString: "4.5",
  //       sla: {
  //         deliveryTime: 13,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-1 py-1 border border-solid bg-slate-100 m-2 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username:</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
