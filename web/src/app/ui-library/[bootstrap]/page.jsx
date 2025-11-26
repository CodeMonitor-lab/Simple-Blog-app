import React from 'react'

const page = async({params}) => {
    const {bootstrap} = await params
    
    // const bootstrapData = 
    console.log(bootstrap)
  return (
    <div>Slug data:{bootstrap.title}</div>
  )
}

export default page