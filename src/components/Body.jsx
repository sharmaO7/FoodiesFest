import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //state variable
  const [ListOfRestaurants,setListOfRestaurants] = useState(resList);

  // let ListOfRestaurants = [
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
      <div className="filter">
        <button
          className="filter-btn"
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
      <div className="res-container">
        {ListOfRestaurants.map(
          (
            restaurant //resList
          ) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
