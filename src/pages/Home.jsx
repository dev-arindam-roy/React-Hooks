import React from 'react'
import MainSidebar from '../components/MainSidebar'

const Home = () => {
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='text-primary'>Welcome, Gyus!!</h1>
        <hr />
        <div className='row'>
          <div className='col-md-3'>
            <MainSidebar />
          </div>
          <div className='col-md-9'>
            <h3>Let's Start..</h3>
            <h3>Check all Applications...</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home