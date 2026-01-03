import { useContext, useState, useRef } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
    const { restaurants } = useContext(RestaurantContext);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [parkingFilter, setParkingFilter] = useState("");

    const searchRef = useRef();

    const filtered = restaurants.filter((r) => {
        return (
            (r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
                r.address.toLowerCase().includes(search.toLowerCase())) &&
            (typeFilter ? r.type === typeFilter : true) &&
            (parkingFilter ? (r.parkingLot ? "true" : "false") === parkingFilter : true)
        );
    });

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar
                setSearch={setSearch}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                parkingFilter={parkingFilter}
                setParkingFilter={setParkingFilter}
                searchRef={searchRef}
            />


            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    padding: 20,
                    justifyContent: "flex-start",
                }}
            >
                {filtered.map((r) => (
                    <RestaurantCard key={r.restaurantID} data={r} isAdmin={false} />
                ))}
            </div>
        </div>
    );
};

export default CustomerDashboard;
