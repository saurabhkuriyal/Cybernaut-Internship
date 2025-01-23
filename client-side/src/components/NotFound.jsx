import React from "react";

const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f0f8ff",
                flexDirection: "column",
            }}
        >
            <h1
                style={{
                    fontSize: "5rem",
                    color: "#0000ff",
                    fontWeight: "bold",
                    margin: 0,
                }}
            >
                404
            </h1>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#0000ff",
                    fontWeight: "bold",
                }}
            >
                Page Not Found
            </p>
        </div>
    );
};

export default NotFound;