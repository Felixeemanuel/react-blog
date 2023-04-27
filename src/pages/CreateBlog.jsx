import React from 'react'

function CreateBlog() {
  return (
    <>
    <div className='form-page'>
        <form className="form-container">
            <h2>Create a new Blog!</h2>
            <div className="form-control">
                <label htmlFor="title" className="label">Title:</label>
                <input type="text" id='title' className="input" />
            </div>
            <div className="form-control">
                <label htmlFor="textarea" className="label">Body:</label>
                <textarea name="textarea" id="textarea"></textarea>
            </div>
            <button className="submit">Create</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog