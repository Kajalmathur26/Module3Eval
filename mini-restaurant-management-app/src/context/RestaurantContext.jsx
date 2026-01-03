import { createContext, useState, useEffect } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("evalData"));
        if (data) setRestaurants(data);
        else localStorage.setItem("evalData", JSON.stringify([]));
    }, []);

    const updateStorage = (data) => {
        localStorage.setItem("evalData", JSON.stringify(data));
        setRestaurants(data);
    };

    const addRestaurant = (restaurant) => {
        const updated = [...restaurants, restaurant];
        updateStorage(updated);
        alert("Restaurant added successfully");
    };

    const deleteRestaurant = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const updated = restaurants.filter(r => r.restaurantID !== id);
            updateStorage(updated);
            alert("Restaurant deleted successfully");
        }
    };

    const updateRestaurant = (updatedRestaurant) => {
        if (window.confirm("Are you sure you want to update?")) {
            const updated = restaurants.map(r =>
                r.restaurantID === updatedRestaurant.restaurantID ? updatedRestaurant : r
            );
            updateStorage(updated);
            alert("Restaurant updated successfully");
        }
    };

    return (
        <RestaurantContext.Provider
            value={{ restaurants, addRestaurant, deleteRestaurant, updateRestaurant }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
