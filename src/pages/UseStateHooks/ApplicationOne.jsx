import React, { useState } from 'react'

const ApplicationOne = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [userBucket, setUserBucket] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserBucket([...userBucket, {name: name, email: email}]);
    resetHandler();
  }

  const resetHandler = () => {
    setName('');
    setEmail('');
  }
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'><strong>Deal With Textbox</strong></div>
            <div className='card-body'>
              <form onSubmit={submitHandler}>
                <div className='form-group mb-3'>
                  <label htmlFor='name'>Name:</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    className='form-control' 
                    placeholder='Enter Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='email'>Email:</label>
                  <input 
                    type='email' 
                    id='name' 
                    name='email' 
                    className='form-control' 
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                  <button type='button' className='btn btn-danger ms-2' onClick={resetHandler}>Reset</button>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <div className='form-group'>
                <h4>User</h4>
                <p><strong>Name:</strong> {name} / <strong>Email:</strong> {email}</p>
              </div>
              <div className='form-group'>
                <h4>User Bucket: ({userBucket.length})</h4>
                <p>{JSON.stringify(userBucket)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationOne