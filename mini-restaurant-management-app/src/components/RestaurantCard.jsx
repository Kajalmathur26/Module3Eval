const RestaurantCard = ({ data, isAdmin, onDelete, onUpdate }) => {
    return (
        <div style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
            <img src={data.image} width="200" alt={data.restaurantName} />
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

            {isAdmin && (
                <>
                    <button onClick={() => onUpdate(data)}>Update</button>
                    <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default RestaurantCard;
