import React, { useState } from 'react'

const ApplicationThree = () => {

  const [user, setUser] = useState({id: '', email: ''});
  const [userList, setUserList] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isExistEmail(user.email)) {
        alert('Email is already exist');
    } else if (isExistId(user.id)) {
        alert('Id is already exist');
    } else {
        setUserList([...userList, user]);
        setUser({id: '', email: ''});
    }
  }

  const isExistEmail = (emailParam) => {
    let isExist = false;
    if (userList.length === 0) {
        return false;
    }
    isExist = userList.find((value) => value.email === emailParam);
    return isExist;
  }

  const isExistId = (idParam) => {
    let isExist = false;
    if (userList.length === 0) {
        return false;
    }
    isExist = userList.find((value) => value.id === idParam);
    return isExist;
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <strong>Application #3</strong>
            </div>
            <div className='card-body'>
              <form onSubmit={handleFormSubmit}>
                <div className='form-group mb-2'>
                  <label htmlFor='id'>User ID:</label>
                  <input type='text' name='user_id' id='id' className='form-control' placeholder='User Id' required value={user.id} onChange={(e) => setUser({ ...user, id: e.target.value })} />
                </div>
                <div className='form-group mb-2'>
                  <label htmlFor='email'>Email ID:</label>
                  <input type='email' name='email' id='email' className='form-control' placeholder='Email Id' required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                </div>
                <div className='form-group mt-3'>
                  <button type='submit' className='btn btn-primary'>Add To List</button>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <strong>User List ({userList.length})</strong>
            </div>
            <div className='card-body'>
              {
                userList.length > 0 && 
                userList.map((value, index) => {
                  return (
                    <li key={index}>
                      <strong>ID: {value.id}</strong> <br/> 
                      <span className='mx-4'>{value.email}</span>
                    </li>
                  )
                })
              }
              { 
                userList.length === 0 && ('User List is Empty!') 
              }
            </div>
            <div className='card-footer'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationThree