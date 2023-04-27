import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {

    const [blog, setBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getDetails = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
          const data = await res.json()
    
          setBlog(data)
          console.log(data)
        }
        getDetails()
      }, [])

  return (
    <div>
        {
            blog && (
                <div className='blogDetail-container'>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                </div>
            )
        }
    </div>
  )
}

export default BlogDetails