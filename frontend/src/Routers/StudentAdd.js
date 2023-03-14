import React from 'react'
import img2 from '../Images/svg/image2.svg'
import google from '../Images/icons/google.png'
import linkedin from '../Images/icons/linkedin.png'
import github from '../Images/icons/github.png'
import facebook from '../Images/icons/facebook.png'

function StudentAdd() {
  return (
    <div className='register-div'>
        <div className='container-register'>
            <div className='style-img'>
                <div className='style-for-1' id='div-1'></div>
                <div className='style-for-1' id='div-2'></div>
                <img src={img2} alt="404" />
            </div>
            <div className='inputs-for-div'>
              <div className='text'>
                <h1>Student<span>ADD</span></h1>
              </div>
              <form>
                <input type="text" name='firstname' placeholder='FirstName' />
                <input type="text" name='lastname' placeholder='Lastname' />
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <div className='text-social'>
                  <div></div><p> or </p><div></div>
                </div>
                <div className='social-media-icons'>
                  <img src={google} alt="404" />
                  <img src={linkedin} alt="404" />
                  <img src={github} alt="404" />
                  <img src={facebook} alt="404" />
                </div>
                <button id='submit'>Submit</button>
              </form>
            </div>
            <div className='text-for-style'>
                <h1>Frontend<span>G6</span></h1>
            </div>
        </div>
    </div>
  )
}

export default StudentAdd