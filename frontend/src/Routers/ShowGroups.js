import React, { useEffect, useState } from 'react'
import GroupCard from '../components/GroupCard'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

function ShowGroups() {
  const [examArray, setExamArray] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/group')
      .then((res) => {
        setExamArray(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      {
        examArray.length > 0 ?
          <div className='flex-div'>
            {examArray.map((group) => {
              return <GroupCard key={group._id} group={group} />
            })}
          </div>
          : <>
            <Card.Text>
              Loading...
            </Card.Text>
          </>
      }
    </div>
  )
}

export default ShowGroups