import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCard(props) {
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
                    <Button className='btn' >Join to group</Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default GroupCard