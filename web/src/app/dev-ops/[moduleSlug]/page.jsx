import React from 'react'

const page = async({params}) => {
    console.log( await params)
  return (
    <div>Module Page</div>
  )
}

export default page