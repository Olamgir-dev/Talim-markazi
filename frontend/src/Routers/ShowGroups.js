import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ShowGroups() {
  const [examArray, setExamArray] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5001/group')
      .then((res) => {
        setExamArray(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>ShowGroups</div>
  )
}

export default ShowGroups