import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import '../css/create-exam.css'

function CreateExam() {
  const user = useSelector(state => state.user.currentUser);
  const [groups, setGroups] = useState([]);
  const [exam, setExam] = useState({ date: "2023-01-01", time: '14:00', duration: '02:00' });
  const [isDisablet, setIsDisablet] = useState(true);
  const errElem = useRef(null);

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
      })
      .catch(err => {
        errElem.current.innerText = err.response.data.msg
        setTimeout(() => {
          errElem.current.innerText = '';
        }, 6000);
      });

    setIsDisablet(false);
  };

  // bg-gradient-to-r from-teal-800 to-teal-500

  return (
    <section className="h-screen flex justify-center items-center p-4">
      <form className="w-full max-w-md p-4 border !border-blue-300 rounded-2xl" onSubmit={handleSubmit}>
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Login</h1>

        <div className="w-full mb-4">
          <label className="">Group: </label>
          <select name='groupId' defaultValue="defaultvalue" required className="w-full py-2 px-6 rounded-md border !border-blue-300" onChange={handleChange}>
            <option value="defaultvalue" disabled>Select your group</option>
            {groups?.map(group => {
              return <option key={group._id} value={group._id}>{group.name}</option>
            })}
          </select>
        </div>
        <div className="w-full mb-4">
          <label className="">Date: </label>
          <input type="date" name='date' required value={exam.date} className="w-full py-2 px-6 rounded-md border !border-blue-300" onChange={handleChange} />
        </div>
        <div className="w-full mb-4">
          <label className="">Time: </label>
          <input type="time" name='time' required value={exam.time} className="w-full py-2 px-6 rounded-md border !border-blue-300" onChange={handleChange} />
        </div>
        <div className="w-full mb-4">
          <label className="">Duration: </label>
          <input type="time" name='duration' required value={exam.duration} className="w-full py-2 px-6 rounded-md border !border-blue-300" onChange={handleChange} />
        </div>
        <div className="w-full mb-4">
          <p className="text-xs text-red-600" ref={errElem}></p>
        </div>
        <div className="w-full">
          <input type="submit" disabled={isDisablet} value="Submit" className={"w-full py-2 px-8 text-center bg-blue-600 text-white rounded-2xl " + (isDisablet && "opacity-70")} />
        </div>
      </form>
    </section>
  )
}

export default CreateExam