import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
    const { restaurants, deleteRestaurant } = useContext(RestaurantContext);

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [parkingFilter, setParkingFilter] = useState("");

    const navigate = useNavigate();

    const filtered = restaurants.filter((r) => {
        const searchMatch =
            r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
            r.address.toLowerCase().includes(search.toLowerCase());

        const typeMatch = typeFilter ? r.type === typeFilter : true;

        const parkingMatch = parkingFilter
            ? (r.parkingLot ? "Yes" : "No") === parkingFilter
            : true;

        return searchMatch && typeMatch && parkingMatch;
    });

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar
                setSearch={setSearch}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                parkingFilter={parkingFilter}
                setParkingFilter={setParkingFilter}
            />

            <div style={{ display: "flex", flex: 1 }}>
                <Sidebar />

                <div
                    style={{
                        flex: 1,
                        padding: 20,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 20,
                    }}
                >
                    {filtered.map((r) => (
                        <RestaurantCard
                            key={r.restaurantID}
                            data={r}
                            isAdmin={true}
                            onDelete={deleteRestaurant}
                            onUpdate={() =>
                                navigate("/admin/restaurants/update", { state: r })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
