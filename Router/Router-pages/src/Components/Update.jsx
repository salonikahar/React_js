import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let { index } = useParams();
  index = Number(index); // Convert to number
  let navigate = useNavigate();
  
  let [stu, setStu] = useState({});
  let [hobby, setHobby] = useState([]);
  let [city] = useState(["Delhi", "Mumbai", "Baroda", "Surat"]);

  useEffect(() => {
    let stuData = JSON.parse(localStorage.getItem("student")) || [];
    if (stuData[index]) {
      setStu(stuData[index]);
      setHobby(stuData[index].hobby || []); // Avoid undefined hobby crash
    }
  }, [index]);

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let prevHobby = [...hobby];

    if (name === "hobby") {
      if (e.target.checked) {
        prevHobby.push(value);
      } else {
        prevHobby = prevHobby.filter((v) => v !== value);
      }
      setHobby(prevHobby);
      setStu({ ...stu, hobby: prevHobby });
    } else {
      setStu({ ...stu, [name]: value });
    }
  };

  let submitData = (e) => {
    e.preventDefault();
    let stuData = JSON.parse(localStorage.getItem("student")) || [];
    stuData[index] = stu;
    localStorage.setItem("student", JSON.stringify(stuData));
    navigate("/show");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-heading">Update Page</h1>
        <form onSubmit={submitData}>
          <table className="form-table">
            <tbody>
              <tr>
                <td className="label">Name:</td>
                <td className="input-field">
                  <input type="text" name="name" value={stu.name || ""} onChange={getInput} className="input-box"/>
                </td>
              </tr>
              <tr>
                <td className="label">Email:</td>
                <td className="input-field">
                  <input type="email" name="email" value={stu.email || ""} onChange={getInput} className="input-box" />
                </td>
              </tr>
              <tr>
                <td className="label">Password:</td>
                <td className="input-field">
                  <input type="text" name="password" value={stu.password || ""} onChange={getInput} className="input-box"/>
                </td>
              </tr>
              <tr>
                <td className="label">Gender:</td>
                <td className="input-field">
                  <input type="radio" name="gender" value="male" onChange={getInput} checked={stu.gender === "male"} /> Male
                  <input type="radio" name="gender" value="female" onChange={getInput} checked={stu.gender === "female"} /> Female
                </td>
              </tr>
              <tr>
                <td className="label">Hobby:</td>
                <td className="input-field">
                  <input type="checkbox" name="hobby" value="reading" onChange={getInput} checked={hobby.includes("reading")} /> Reading
                  <input type="checkbox" name="hobby" value="writing" onChange={getInput} checked={hobby.includes("writing")} /> Writing
                  <input type="checkbox" name="hobby" value="coding" onChange={getInput} checked={hobby.includes("coding")} /> Coding
                </td>
              </tr>
              <tr>
                <td className="label">Select City:</td>
                <td className="input-field">
                  <select name="city" value={stu.city || ""} onChange={getInput} className="input-box">
                    <option value="">Select your City</option>
                    {city.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="submit" className="submit-btn">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Update;
