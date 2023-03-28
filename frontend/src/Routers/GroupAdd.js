import React, { useState } from "react";
import "../sass/group.scss";
import Swal from "sweetalert2";
import axios from "axios";
function GroupAdd() {
  const [group, setGroup] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    console.log(name);
    setGroup({ ...group, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/group/add", group)
      .then((res) => {
        Swal.fire(
          "Group successfully added",
          "You clicked the button!",
          "success"
        );
      })
      .catch((err) => {
        Swal.fire(
          "Something wrong",
          "You clicked the button!",
          "error"
        );  });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3"></div>
        <div className=" col-xl-6 mt-5 card">
          <h1 className="text-center py-3" style={{color: "rgb(251, 68, 1)"}}>Add group</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Group name"
              className="form-control mt-4" required
              onChange={(e) => handleChange(e)}
            />
            <input
              type="time"
              name="time"
              placeholder="Group name"
              className="form-control mt-4" required
              onChange={(e) => handleChange(e)}
            />
            <select
              name="level"
              id=""
              className="form-select mt-4" required
              onChange={(e) => handleChange(e)}
            >
              <option value="beginner">Beginner</option>
              <option value="elementary">Elementary</option>
              <option value="pre-intermediate">Pre-intermediate</option>
              <option value="intermediate">Intermediate</option>
              <option value="uppr-intermediate">Upper-ntermediate</option>
              <option value="ielts">IELTS</option>
            </select>
            <div className="d-flex my-4 gap-3">
              <div className="ps-3 col">
                <label htmlFor="radio"> <strong>ODD DAYS</strong> </label> <br />
                <input
                  type="radio"
                  id="radio"
                  name="days"
                  value={["MONDAY", "WEDNESDAY", "FRIDAY"]}
                  onChange={(e) => handleChange(e)}
                  className="form-check-input" required
                />{" "}
                <br />
              </div>
              <div className="ps-3 col">
                <label htmlFor="radio"> <strong>EVEN DAYS</strong> </label> <br />
                <input
                  type="radio"
                  name="days"
                  value={["TUESDAY", "THIRSDAY", "SATURDAY"]}
                  id="radio" required
                  onChange={(e) => handleChange(e)}
                  className="form-check-input"
                />{" "}
                <br />
              </div>
            </div>
            <button className="btn btn-outline-primary py-2 mb-3 w-100">
              ADD GROUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GroupAdd;