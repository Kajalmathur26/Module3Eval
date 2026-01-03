import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
    const { restaurants, addRestaurant, deleteRestaurant } = useContext(RestaurantContext);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [parkingFilter, setParkingFilter] = useState("");
    const navigate = useNavigate();

    const handleAdd = () => {
        const restaurant = {
            restaurantID: Date.now(),
            restaurantName: "1135 AD",
            address: "Jaipur, Amber Fort, Rajasthan",
            type: "Rajasthani",
            parkingLot: true,
            image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
        };
        addRestaurant(restaurant);
    };

    const filtered = restaurants.filter(r => {
        return (
            (r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
                r.address.toLowerCase().includes(search.toLowerCase())) &&
            (typeFilter ? r.type === typeFilter : true) &&
            (parkingFilter ? r.parkingLot.toString() === parkingFilter : true)
        );
    });

    return (
        <div>
            <Navbar
                setSearch={setSearch}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                parkingFilter={parkingFilter}
                setParkingFilter={setParkingFilter}
            />
            <button onClick={handleAdd}>Add Restaurant</button>
            {filtered.map(r => (
                <RestaurantCard
                    key={r.restaurantID}
                    data={r}
                    isAdmin={true}
                    onDelete={deleteRestaurant}
                    onUpdate={() => navigate("/admin/restaurants/update", { state: r })}
                />
            ))}
        </div>
    );
};

export default AdminDashboard;
