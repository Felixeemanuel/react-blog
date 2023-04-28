import React from 'react'
import { useState } from 'react'

function CreateBlog() {

    const [inputs, setInputs] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputs)

    }
  return (
    <>
    <div className='form-page'>
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Create a new Blog!</h2>
            <div className="form-control">
                <label htmlFor="title" className="label">Title:</label>
                <input onChange={handleChange} name='title' type="text" id='title' className="input" />
            </div>
            <div className="form-control">
                <label htmlFor="textarea" className="label">Body:</label>
                <textarea onChange={handleChange} name="body" id="textarea"></textarea>
            </div>
            <button type='submit' className="submit">Create</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog