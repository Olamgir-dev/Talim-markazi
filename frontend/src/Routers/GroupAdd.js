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
        Swal.fire("Something wrong", "You clicked the button!", "error");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3"></div>
        <div className=" col-xl-6 mt-5 card">
          <h1 className="text-center py-3">Add group</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Group name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Group name"
              className="form-control mt-2"
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="time" className="mt-3">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              placeholder="Group name"
              className="form-control mt-2"
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="level" className="mt-3">
              Level
            </label>
            <select
              name="level"
              id="level"
              className="form-select mt-2"
              required
              onChange={(e) => handleChange(e)}
              defaultValue="choose-level"
            >
              <option value="choose-level" hidden disabled>
                Choose level
              </option>
              <option value="beginner">Beginner</option>
              <option value="elementary">Elementary</option>
              <option value="pre-intermediate">Pre-Intermediate</option>
              <option value="intermediate">Intermediate</option>
              <option value="uppr-intermediate">Upper-Intermediate</option>
              <option value="ielts">IELTS</option>
            </select>
            <div className="d-flex my-4 gap-3">
              <div className="ps-3 col">
                <label htmlFor="radio">
                  {" "}
                  <strong>ODD DAYS</strong>{" "}
                </label>{" "}
                <br />
                <input
                  type="radio"
                  id="radio"
                  name="days"
                  value={["Monday", "Wednesday", "Friday"]}
                  onChange={(e) => handleChange(e)}
                  className="form-check-input"
                  required
                />{" "}
                <br />
              </div>
              <div className="ps-3 col">
                <label htmlFor="radio">
                  {" "}
                  <strong>EVEN DAYS</strong>{" "}
                </label>{" "}
                <br />
                <input
                  type="radio"
                  name="days"
                  value={["Tuesday ", "Thursday ", "Saturday"]}
                  id="radio"
                  required
                  onChange={(e) => handleChange(e)}
                  className="form-check-input"
                />{" "}
                <br />
              </div>
            </div>
            <button id="button" className="btn py-2 mb-3 w-100">
              ADD GROUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GroupAdd;
