import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCard(props) {
    console.log(props.group);
    const { level, name, teacherId, time, _id, days } = props.group;
    return (
        <div>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/yB0MhK4/photo-2022-07-14-12-53-10.jpg" />
                <Card.Body>
                    <Card.Title ><pre className='flex-div'>{name} <p>group</p></pre></Card.Title>
                    <Card.Subtitle>{level}</Card.Subtitle>  
                    <br />
                    <Card.Body className='flex-div'>
                        Kunlar : {days.map((day) => {
                            return (
                                <p key={day}>{day}</p>
                            )
                        })}
                    </Card.Body>
                    <Button variant="primary">Join to group</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GroupCard