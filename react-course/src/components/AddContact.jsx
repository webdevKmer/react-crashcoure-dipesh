import React from 'react'

const AddContact = () => {
  return (
    <>
    <label>
      Name : <br />
      <input type="text" placeholder='Enter the Name...' value=""/>
    </label> 
    <br />
    <label>
      E-Mail : <br />
      <input type="email" placeholder='Enter the E-Mail...' value=""/>
    </label>
    </>
  )
}

export default AddContact