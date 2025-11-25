import React from 'react'

const Dashboard = async() => {

    await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
        <h2>This is the Dashboard page which took 5 seconds to load.</h2>
    </div>
  )
}

export default Dashboard