// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ hobbies, onDragStart, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter hobbies based on user input
    const filteredHobbies = hobbies.filter((hobby) =>
        hobby.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ width: "250px", padding: "10px", borderRight: "1px solid #ccc" }}>
            <Link to={`/createuser`} className="btn btn-primary">Add User</Link>
            <h3>Hobbies</h3>
            <input
                type="text"
                placeholder="Search hobbies"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onFilter(e.target.value);
                }}
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
            />
            <ul>
                {filteredHobbies.map((hobby) => (
                    <li
                        key={hobby}
                        draggable
                        onDragStart={(event) => onDragStart(event, hobby)}
                        style={{
                            margin: "5px 0",
                            padding: "5px",
                            background: "#e0f7fa",
                            border: "1px solid #006064",
                            borderRadius: "5px",
                            cursor: "grab",
                        }}
                    >
                        {hobby}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
