import { useState, useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

export default function Sidebar() {
    const { addRestaurant } = useContext(RestaurantContext);
    const [form, setForm] = useState({
        restaurantName: "",
        address: "",
        type: "Rajasthani",
        parkingLot: true,
        image:
            "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: name === "parkingLot" ? value === "true" : value });
    };

    const handleAdd = () => {
        if (!form.restaurantName || !form.address) {
            alert("Please fill all fields");
            return;
        }
        addRestaurant({ ...form, restaurantID: Date.now() });
        setForm({ ...form, restaurantName: "", address: "" });
    };

    return (
        <div style={{ width: 250, padding: 20, borderRight: "1px solid #ccc" }}>
            <h3>Add Restaurant</h3>
            <input placeholder="Name" name="restaurantName" value={form.restaurantName} onChange={handleChange} />
            <input placeholder="Address" name="address" value={form.address} onChange={handleChange} />
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Mughlai</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>
                <option>South Indian</option>
            </select>
            <select name="parkingLot" value={form.parkingLot} onChange={handleChange}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <input name="image" value={form.image} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
