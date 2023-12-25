import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // (resName,cuisine)
  const { resData } = props;
  // console.log(resData)/\;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating ,sla} =
    resData?.info;
  //const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "rgb(44, 44, 44)" }}>
<img className="res-logo" alt="briyani image" src={ CDN_URL + cloudinaryImageId } />
      <div className="res-text">
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{sla.deliveryTime} minutes </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
