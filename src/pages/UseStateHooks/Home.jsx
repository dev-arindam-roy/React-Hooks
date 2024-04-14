import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='text-primary'>useState Hook - Applications</h1>
        <hr />
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home