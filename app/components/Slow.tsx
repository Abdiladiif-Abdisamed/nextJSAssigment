import React from 'react'

const Slow = async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div>
        <h2>This is a Slow component that took 5 seconds to load.</h2>
    </div>
  )
}

export default Slow