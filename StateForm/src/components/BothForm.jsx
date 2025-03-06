// import React, { useState } from 'react';

// function BothForm() {
//     // controlled
//     const [isControlled, setIsControlled] = useState(true);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         passcode: "",
//         age: "",
//         gender: "",
//         bio: "",
//         hobbies: [],
//         country: "India",
//         terms: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]:
//                 type === "checkbox" && name !== "terms"
//                     ? checked
//                         ? [...prev.hobbies, value]
//                         : prev.hobbies.filter((hobby) => hobby !== value)
//                     : type === "checkbox"
//                         ? checked
//                         : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isControlled) {
//             console.log("Form submitted:", formData);
//         }
//     };

//     const handleToggle = () => {
//         setIsControlled(!isControlled);
//     };

//     return (
//         <>
//             <h1>{isControlled ? "Controlled" : "Uncontrolled"}</h1>
//             <label>
//                 <input type="checkbox" checked={isControlled} onChange={handleToggle} />
//                 Toggle Form Control
//             </label>

//             <form onSubmit={handleSubmit}>
//                 <label>Name: </label>
//                 {isControlled ? (
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name} // Controlled input
//                         onChange={handleChange} // Now it updates state
//                     />
//                 ) : (
//                     <input type="text" />
//                 )}

//                 <label>Email : </label>
//                 {isControlled ? (
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email} 
//                         onChange={handleChange} 
//                     />
//                 ) : (
//                     <input type="email" />
//                 )}

//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     );
// }

// export default BothForm;

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
        bio: "",
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
                        : type === "radio"  // ✅ Handle radio buttons
                            ? value
                            : value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isControlled) {
            console.log("Form submitted:", formData);
        }
    };

    const handleToggle = () => {
        setIsControlled(!isControlled);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "2px 2px 12px rgba(0,0,0,0.1)", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>
                {isControlled ? "Controlled" : "Uncontrolled"} Form
            </h1>

            <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                <input type="checkbox" checked={isControlled} onChange={handleToggle} style={{ marginRight: "8px" }} />
                Toggle Form Control
            </label>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Name:</label>
                {isControlled ? (
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                ) : (
                    <input type="text" style={{ padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }} />
                )}

                <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Email:</label>
                {isControlled ? (
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                ) : (
                    <input type="email" style={{ padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }} />
                )}

                <label>Password</label>
                {isControlled ? (
                    <input type='password' name="password" value={formData.password} onChange={handleChange} />
                )
                    :
                    (<input type='password'></input>)
                }

                <label>Age</label>
                {isControlled ? (
                    <input type='text' name="age" value={formData.age} onChange={handleChange} />
                )
                    :
                    (<input type='text'></input>)
                }

                <label>Gender</label>
                <input type='radio' name="Male" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                <input type='radio' name="Female" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />



                <button type="submit" style={{ backgroundColor: "#007BFF", color: "white", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BothForm;

