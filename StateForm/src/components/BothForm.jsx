import React, { useState } from 'react';

function BothForm() {
    // Controlled state toggle
    const [isControlled, setIsControlled] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        hobbies: [],
        country: "India",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox" && name !== "terms"
                    ? checked
                        ? [...prev.hobbies, value]
                        : prev.hobbies.filter((hobby) => hobby !== value)
                    : type === "checkbox"
                        ? checked
                        : type === "radio"
                            ? value
                            : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        if (isControlled) {
            console.log("Form submitted:", formData);
        }
        
    };

    const handleToggle = () => {
        setIsControlled(!isControlled);
    };

    const styles = {
        container: {
            width: '550px',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            textAlign: 'center',
            color: '#333'
        },
        form: {
            display: 'flex',
            flexDirection: 'column'
        },
        label: {
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            padding: '8px',
            marginBottom: '15px',
            borderRadius: '4px',
            border: '1px solid #ccc'
        },
        button: {
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{isControlled ? "Controlled" : "Uncontrolled"} Form</h1>
            <label style={styles.label}>
                <input type="checkbox" checked={isControlled} onChange={handleToggle} />
                Toggle Form Control
            </label>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={!isControlled} style={styles.input} />

                <label style={styles.label}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={!isControlled} style={styles.input} />

                <label style={styles.label}>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} disabled={!isControlled} style={styles.input} />

                <label style={styles.label}>Age:</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} disabled={!isControlled} style={styles.input} />

                <label style={styles.label}>Gender:</label>
                <div>
                    <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female</label>
                </div>

                <label style={styles.label}>Country:</label>
                <select name="country" value={formData.country} onChange={handleChange} disabled={!isControlled} style={styles.input}>
                    <option value="India">India</option>
                    <option value="England">England</option>
                    <option value="Germany">Germany</option>
                </select>

                <label style={styles.label}>Hobbies:</label>
                <div>
                    <label><input type="checkbox" name="hobbies" value="Reading" checked={formData.hobbies.includes("Reading")} onChange={handleChange} /> Reading</label>
                    <label><input type="checkbox" name="hobbies" value="Sports" checked={formData.hobbies.includes("Sports")} onChange={handleChange} /> Sports</label>
                    <label><input type="checkbox" name="hobbies" value="Traveling" checked={formData.hobbies.includes("Traveling")} onChange={handleChange} /> Traveling</label>
                </div>

                <label style={styles.label}>
                    <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                    I agree to the terms and conditions
                </label>

                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
}

export default BothForm;
