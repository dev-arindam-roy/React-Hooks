import React, { useState } from 'react'

const cities = ['Kolkata', 'Delhi', 'Mumbai', 'Karala', 'Pune', 'Bangalore'];

const ApplicationFour = () => {

  const [user, setUser] = useState({name: '', city: ''});
  const [userList, setUserList] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser({name: '', city: ''});
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <strong>Application #4</strong>
            </div>
            <div className='card-body'>
              <form onSubmit={handleFormSubmit}>
                <div className='form-group mb-2'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' name='name' id='name' className='form-control' placeholder='Name' required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className='form-group mb-2'>
                  <label htmlFor='city'>City:</label>
                  <select className='form-select' id='city' name='city' value={user.city} onChange={(e) => setUser({...user, city: e.target.value})}>
                    <option value="">-City-</option>
                    {
                        cities.length > 0 &&
                        cities.map((value, index) => {
                            return (
                                <option key={index} value={value}>{value}</option>
                            )
                        })
                    }
                  </select>
                </div>
                <div className='form-group mt-3'>
                  <button type='submit' className='btn btn-primary'>Add To List</button>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>City:</strong> {user.city}
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
                      <strong>{index + 1}:</strong> {value.name} @ {value.city}
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

export default ApplicationFour