import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
    const { restaurants } = useContext(RestaurantContext);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [parkingFilter, setParkingFilter] = useState("");

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
            {filtered.map(r => (
                <RestaurantCard key={r.restaurantID} data={r} />
            ))}
        </div>
    );
};

export default CustomerDashboard;
