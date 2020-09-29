import React, { Fragment, useState } from 'react'

const Register = () => {
  const [inputs, setInputs] = useState({
    email: 'pig',
    password: '',
    name: '',
  })

  const { email, password, name } = inputs

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()

    try {

      const response = await fetch("http:")
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className='text-center my-5'>Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type='email'
          name='email'
          placeholder='email'
          className='form-control my-3'
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='form-control my-3'
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input
          type='text'
          name='name'
          placeholder='name'
          className='form-control my-3'
          value={name}
          onChange={(e) => onChange(e)}
        />
        <button className='btn btn-success btn-block'>Submit</button>
      </form>
    </Fragment>
  )
}

export default Register
