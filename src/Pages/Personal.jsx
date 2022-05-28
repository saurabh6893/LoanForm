import React, { useState } from 'react'
import Axios from 'axios'

function Personal() {
  const [firstname, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const createUser = () => {
    Axios.post('http://localhost:3002/createUser', {
      age,
      firstname,
      phone,
      lastname,
      email,
    }).then((response) => {
      alert('Done')
    })
  }
  return (
    <div className='Form P'>
      <h1>Personal</h1>
      <div className='data'>
        <label>First Name</label>
        <input
          type='text'
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </div>

      <div className='data'>
        <label>Last Name</label>
        <input
          type='text'
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />
      </div>

      <div className='data'>
        <label>Age</label>
        <input
          type='number'
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
      </div>

      <div className='data'>
        <label>Phone Number</label>
        <input
          type='text'
          onChange={(event) => {
            setPhone(event.target.value)
          }}
        />
      </div>
      <div className='data'>
        <label>Email Address</label>
        <input
          type='email'
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </div>
      <button className='btx' onClick={createUser}>
        Create
      </button>
    </div>
  )
}

export default Personal
