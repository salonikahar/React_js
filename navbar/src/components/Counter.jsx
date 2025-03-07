import React, { useState, useEffect } from "react";

const CounterPage = ({ theme }) => {
    const [count, setCount] = useState(0);
    const [isAutoIncrementing, setIsAutoIncrementing] = useState(false);

    useEffect(() => {
        let interval;
        if (isAutoIncrementing && count < 100) {
            interval = setInterval(() => {
                setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isAutoIncrementing, count]);

    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
        },
        counterBox: {
            width: "400px",
            padding: "20px",
            backgroundColor: theme === "light" ? "#fff" : "#444",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: theme === "light" ? "#333" : "#fff",
        },
        countText: {
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        button: {
            padding: "10px 15px",
            margin: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
        },
        increment: {
            backgroundColor: theme === 'light' ? "#555" : "#f0f0f0",
            color: theme === 'light' ? "#f0f0f0" : "#333",
        },
        decrement: {
            backgroundColor: theme === 'light' ? "#555" : "#f0f0f0",
            color: theme === 'light' ? "#f0f0f0" : "#333",
        },
        reset: {
            backgroundColor: theme === 'light' ? "#555" : "#f0f0f0",
            color: theme === 'light' ? "#f0f0f0" : "#333",
        },
        autoIncrement: {
            backgroundColor: theme === 'light' ? "#555" : "#f0f0f0",
            color: theme === 'light' ? "#f0f0f0" : "#333",
        },
        buttonGroup :{
            display : 'flex',
            justifyContent :'center',
            alignItems :'center',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.counterBox}>
                <h2>Counter Page</h2>
                <p style={styles.countText}>{count}</p>
                <div style={styles.buttonGroup}>
                    <button style={{ ...styles.button, ...styles.increment }} onClick={() => setCount((prev) => (prev < 100 ? prev + 1 : 100))}>+</button>
                    <button style={{ ...styles.button, ...styles.decrement }} onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>-</button>
                    <button style={{ ...styles.button, ...styles.autoIncrement }} onClick={() => setIsAutoIncrementing(!isAutoIncrementing)}>
                        {isAutoIncrementing ? "Stop Auto" : "Auto Increment"}
                    </button>
                    <button style={{ ...styles.button, ...styles.reset }} onClick={() => { setCount(0); setIsAutoIncrementing(false); }}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;
