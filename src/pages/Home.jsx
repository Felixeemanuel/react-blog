import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [getPosts, setgetPosts] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
      const data = await res.json()

      setgetPosts(data)
      console.log(data)
    }
    getTodos()
  }, [])

  return (
    <>
    <div className="createBtn-div">
      <Link to={'/create'} className='createBtn' >New</Link>
    </div>
        {
          getPosts.map(post => (
            <Link className='getPostLink' key={post.id} to={`/${post.id}` }>
            <div className="blog-container">
              <div className='padding'>
                <h3>{post.title}</h3>
              </div>
              <p>{post.body}</p>
            </div>
          </Link>
          ))
        }

    </>
  )
}

export default Home