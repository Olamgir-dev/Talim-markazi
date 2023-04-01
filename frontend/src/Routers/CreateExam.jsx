import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

function CreateExam() {
  const user = useSelector(state => state.user.currentUser);
  const [groups, setGroups] = useState([]);
  const [exam, setExam] = useState({ date: "2023-01-01", time: '14:00', duration: '02:00' });
  const [isDisablet, setIsDisablet] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = user?._id;

    axios.get(`http://localhost:5001/group/teacher/${userId}`)
      .then(res => {
        setGroups(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExam({ ...exam, [name]: value });
    const copyExam = { ...exam, [name]: value }

    if (copyExam.date && copyExam.time && copyExam.duration) setIsDisablet(false)
    else setIsDisablet(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisablet(true);

    axios.post('http://localhost:5001/exam/add', exam)
      .then(res => {
        console.log('Ok')
        setExam({ date: "2023-01-01", time: '14:00', duration: '02:00' });
        setIsDisablet(false);
        navigate('/teacher/create-question', res.data._id);
      })
      .catch(err => {
        console.log(err)
      });

  };

  return (
    <section className="create-exam vh-100 d-flex justify-content-center align-items-center p-4">
      <div className="col-lg-4 col-sm-8 col-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Groups</label>
            <select name="groupId" defaultValue='Select your group' className='form-select' onChange={handleChange}>
              <option disabled>Select your group</option>
              {groups.map(group => {
                return <option key={group._id} value={group._id}>{group.name}</option>
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" name='date' value={exam.date || ''} className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input type="time" name='time' value={exam.time || ''} className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input type="time" name='duration' value={exam.duration || ''} className="form-control" onChange={handleChange} />
          </div>
          <input type="submit" disabled={isDisablet} value='Submit' className="btn btn-primary" />
        </form>
      </div>
    </section>
  )
}

export default CreateExam