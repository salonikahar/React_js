import React, { useEffect, useState } from "react";

const UserProfile = ({ theme }) => {
    const [profile, setProfile] = useState(() => {
        const storedProfile = localStorage.getItem('profile');

        return storedProfile
            ? JSON.parse(storedProfile)
            : {
                name: "User1",
                email: "user@gmail.com",
                bio: "React developer.",
                theme: "light",
                notification: true,
            }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...profile });

    useEffect(() => {
        localStorage.setItem("userProfile",JSON.stringify(profile));
    },[profile]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile({ ...formData });
        setIsEditing(false);
    };

    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
        },
        profileBox: {
            width: "400px",
            padding: "20px",
            backgroundColor: theme === "light" ? "#fff" : "#444",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: theme === "light" ? "#333" : "#fff",
        },
        input: {
            padding: "10px",
            width: "80%",
            border: `1px solid ${theme === "light" ? "#ddd" : "#666"}`,
            borderRadius: "5px",
            marginBottom: "10px",
            backgroundColor: theme === "light" ? "#fff" : "#666",
            color: theme === "light" ? "#000" : "#fff",
        },
        button: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "5px",
            backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
            color: theme === "light" ? "#fff" : "#333",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.profileBox}>

                {!isEditing ? (
                    <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.email}</p>
                        <p>{profile.bio}</p>
                        <button style={styles.button} onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <button type="submit" style={styles.button}>Save</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
