import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCard(props) {
    console.log(props.group);
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
                    <Button className='flex-button' variant="primary">Join to group</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GroupCard