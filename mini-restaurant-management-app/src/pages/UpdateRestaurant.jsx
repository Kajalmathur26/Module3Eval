import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateRestaurant = () => {
    const { updateRestaurant } = useContext(RestaurantContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [restaurant, setRestaurant] = useState(location.state);

    if (!restaurant) return <div>No restaurant selected</div>;

    const handleChange = e => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: name === "parkingLot" ? value === "true" : value });
    };

    const handleSubmit = () => {
        updateRestaurant(restaurant);
        navigate("/admin/dashboard");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Update Restaurant</h2>
            <input name="restaurantName" value={restaurant.restaurantName} onChange={handleChange} />
            <input name="address" value={restaurant.address} onChange={handleChange} />
            <select name="type" value={restaurant.type} onChange={handleChange}>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Mughlai">Mughlai</option>
                <option value="Jain">Jain</option>
                <option value="Thai">Thai</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
            </select>
            <select name="parkingLot" value={restaurant.parkingLot} onChange={handleChange}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <input name="image" value={restaurant.image} onChange={handleChange} />
            <br /><br />
            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdateRestaurant;
