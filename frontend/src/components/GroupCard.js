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
        <div>
            <Card className='fix-div'>
                <Card.Img variant="top" src="https://i.ibb.co/yB0MhK4/photo-2022-07-14-12-53-10.jpg" />
                <Card.Body>
                    <Card.Title ><pre className='flex-div'>{name}<p>group</p></pre></Card.Title>
                    <br />
                    <Card.Subtitle>{level}</Card.Subtitle>
                    <br />
                    <div className='flex-div'>
                        Days : {days.map((day) => {
                            return (
                                <h4 key={day}>{day}</h4>
                            )
                        })}
                    </div>
                    <br />
                    <h4>Time : {time} </h4>
                    <br />
                    <Button className='flex-button' variant="primary" onClick={() => handleJoin()}>Join to group</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GroupCard