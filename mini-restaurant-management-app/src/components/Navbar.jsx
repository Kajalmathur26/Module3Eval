import { useEffect } from "react";

const Navbar = ({
    setSearch,
    typeFilter,
    setTypeFilter,
    parkingFilter,
    setParkingFilter,
    searchRef
}) => {
    useEffect(() => {
        if (searchRef?.current) {
            searchRef.current.focus();
        }
    }, [searchRef]);

    return (
        <div style={{ padding: 10, background: "#eee", display: "flex", gap: 10 }}>
            <input
                ref={searchRef}
                placeholder="Search by name or address"
                onChange={e => setSearch(e.target.value)}
            />
            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                <option value="">All Types</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Mughlai">Mughlai</option>
                <option value="Jain">Jain</option>
                <option value="Thai">Thai</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
            </select>
            <select value={parkingFilter} onChange={e => setParkingFilter(e.target.value)}>
                <option value="">All Parking</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
    );
};

export default Navbar;
