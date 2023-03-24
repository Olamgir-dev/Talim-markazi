import axios from "axios";
import React, { useEffect, useState } from "react";

function ShowExams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exam/show-exam`)
      .then((res) => {
        setExams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ota-div">
      {exams.map((api) => {
        return (
          <div className="card" style={{ width: "{18rem}" }} key={api.groupId}>
            <img
              src="https://img.freepik.com/free-photo/final-exam-results-test-reading-books-words-concept_53876-123721.jpg?w=2000"
              className="card-img-top"
              alt="404"
            />
            <div className="card-body">
              <p className="card-text">Date: {new Date(api.date).toLocaleTimeString('en-US')}</p>
              <p className="card-text">Time: {api.time}</p>
              <p className="card-text">Duration: {api.duration}</p>
              <a className="btn btn-outline-primary">Question</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowExams;
