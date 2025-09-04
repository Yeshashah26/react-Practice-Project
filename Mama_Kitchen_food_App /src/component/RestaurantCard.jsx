const RestaurantCard =(props) => {
    const {resData} =props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} id="card-img"/>
            <div className="res-card-content">
                <h3 className="card-title">{name}</h3>
                <div className="rating">{avgRating} stars</div>
                <div className="cusinies">{cuisines.join(',')} </div>
                <div className="cost-for-two">{costForTwo}</div>
                <div className="delivery-time">{deliveryTime} minutes</div>
            <div className="location">{areaName}</div>
            </div>
        </div>
    )
}
export default RestaurantCard;