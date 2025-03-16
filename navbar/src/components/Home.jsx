import React from 'react';

function Home({ theme }) {
    const homeStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",     
        textAlign: "center",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        // transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
    };

    const textStyle = {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "15px",
    };

    const paragraphStyle = {
        fontSize: "20px",
        maxWidth: "600px",
        lineHeight: "1.6",
        opacity: "0.9",
    };

    const buttonStyle = {
        marginTop: "20px",
        padding: "12px 24px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: theme === "light" ? "#007BFF" : "#FF9800",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background 0.3s ease-in-out",
    };

    return (
        <div style={homeStyle}>
            <h1 style={textStyle}>Welcome to the Home Page..!</h1>
            <p style={paragraphStyle}>
                Explore our website and enjoy seamless navigation. Click on the tabs above to discover more!
            </p>
            <button style={buttonStyle} onClick={() => alert("Welcome!")}>
                Get Started
            </button>
        </div>
    );
}

export default Home;
