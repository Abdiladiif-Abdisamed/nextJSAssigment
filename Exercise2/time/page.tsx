import React from 'react'

const Time = () => {
    const Now = new Date().toLocaleString();
  return (
    <div>{Now}</div>
  )
}

export default Time