import { useEffect, useState } from "react";
import "../styles.css"

function Home() {
  let [stud, setStud] = useState({});
  let [stuData, setStuData] = useState([]);
  let [hobby, setHobby] = useState([]);
  let [city, setCity] = useState(["Delhi", "Mumbai", "Baroda", "Surat"])

  useEffect(() => {
    let allRecord = JSON.parse(localStorage.getItem('student'));
    setStuData(allRecord);
  }, [setStuData])

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let prevHobby = [...hobby];

    if (name == 'hobby') {
      if (e.target.checked) {
        prevHobby.push(value);
      }
      else {
        prevHobby = prevHobby.filter((v, i) => v !== e.target.value)

      }
    }
    setHobby(prevHobby);
    console.log(prevHobby);

    if (name == 'hobby') {
      setStud({ ...stud, ['hobby']: prevHobby })
    }
    else {
      setStud({ ...stud, [name]: value })
    }
  }



  let submitData = (e) => {
    e.preventDefault();

    let record = [...stuData, stud];
    setStuData(record);
    localStorage.setItem("student", JSON.stringify(record));
    setStud({});
    setHobby([]);
  }


  return (
    <>

      <div className="form-container">
        <div>
          {/* <h1 className="form-heading">Fill the Form</h1> */}
          <div className="form-box">
            <form action="post" onSubmit={submitData}>
              <table className="form-table">
                <tr>
                  <td className="label">Name:</td>
                  <td className="input-field">
                    <input type="text" name="name" value={stud.name || ""} onChange={getInput} className="input-box" />
                  </td>
                </tr>
                <tr>
                  <td className="label">Email:</td>
                  <td className="input-field">
                    <input type="email" name="email" value={stud.email || ""} onChange={getInput} className="input-box" />
                  </td>
                </tr>
                <tr>
                  <td className="label">Password:</td>
                  <td className="input-field">
                    <input type="password" name="password" value={stud.password || ""} onChange={getInput} className="input-box" />
                  </td>
                </tr>
                <tr>
                  <td className="label">Gender:</td>
                  <td className="input-field">
                    <input type="radio" name="gender" value="male" onChange={getInput} checked={stud.gender === "male"} /> Male
                    <input type="radio" name="gender" value="female" onChange={getInput} checked={stud.gender === "female"} /> Female
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
                    <select name="city" onChange={getInput} className="select-box">
                      <option value="">Select your City</option>
                      {city.map((v, i) => (
                        <option key={i} value={v}>{v}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="button-container">
                    <button type="submit" name="submit" className="submit-btn">Submit</button>
                    <button type="button" className="delete-btn">Delete</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


