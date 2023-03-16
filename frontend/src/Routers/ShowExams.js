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
          <div class="card" style={{ width: "{18rem}" }} key={api.groupId}>
            <img
              src="https://img.freepik.com/free-photo/final-exam-results-test-reading-books-words-concept_53876-123721.jpg?w=2000"
              class="card-img-top"
              alt="404"
            />
            <div class="card-body">
              <p class="card-text">Date: {api.date}</p>
              <p class="card-text">Time: {api.time}</p>
              <p class="card-text">Duration: {api.duration}</p>
              <a href="#" class="btn btn-outline-primary">
                Question
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowExams;
