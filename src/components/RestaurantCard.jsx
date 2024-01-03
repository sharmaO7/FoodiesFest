import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // (resName,cuisine)
  const { resData } = props;
  // console.log(resData)/\;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  //const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 w-[250px] rounded-lg bg-slate-200 hover:bg-slate-300 shadow-lg">
      <img
        className="rounded-lg w-full h-60"
        alt="briyani image"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-text p-4 ">
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{sla.deliveryTime} minutes </h5>
      </div>
    </div>
  );
};

//Higher order component
//input-RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white">promoted!</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
