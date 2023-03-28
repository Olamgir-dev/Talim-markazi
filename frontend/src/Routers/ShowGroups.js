import React, { useEffect, useState } from 'react'
import GroupCard from '../components/GroupCard'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

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
    <div className='container'>
      <div className='row'>
      {
        examArray.length > 0 ?
          <div className='group-father'>
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
    </div>
  )
}

export default ShowGroups