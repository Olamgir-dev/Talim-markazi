import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function GroupCard(props) {
    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.currentUser)

    const handleJoin = () => {
        if (userData !== null) {

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + userData.token
                }
            }
            axios
                .put("http://localhost:5000/student/joingroup", { studentId: userData._id, groupId: props.group._id, config })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
            console.log(props.group._id);
        }
        else {
            alert('Please login first')
            navigate('/student-login');
        }
    }

    const { level, name, teacherId, time, _id, days } = props.group;
    return (
        <div className='col-xl-3'>
            <Card className='card'>
                <Card.Img className='card-head' variant="top" src="https://i.ibb.co/yB0MhK4/photo-2022-07-14-12-53-10.jpg" />
                <Card.Body>
                    <Card.Title ><pre className='flex-div'><span className='fw-bold'>{name}</span> group</pre></Card.Title>
                    <Card.Subtitle><span className='fw-bold'>level:</span>{level}</Card.Subtitle>
                    <div className='flex-div'>
                        <span className='fw-bold'>Days: </span>{days.map((day,i) => {
                            return (
                                <p className='text-capitalize' key={i}>{day}</p>
                            )
                        })}
                    </div>

                    <p><span className='fw-bold'>Time :</span> {time} </p> 
                    <div className='d-flex justify-content-end'>
<<<<<<< Updated upstream
                    <Button className='btn' >Join to group</Button>
=======
                    <Button className='btn' onClick={handleJoin} >Join to group</Button>
>>>>>>> Stashed changes
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default GroupCard