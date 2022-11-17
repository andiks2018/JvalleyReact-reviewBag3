import React from 'react'
import useBlogs from '../hook/useBlog'
//import { useContext } from 'react'
//import { BlogContext } from '../context/BlogContextProvider'

export default function Blogs() {

    //const {post} = useContext(BlogContext)
    const {post} = useBlogs()

  return (
    <div>
        <h1>Blog</h1>
        {post.map((e)=>(
            <div key={e.id}>
                <h2>{e.title}</h2>
                <h4>{e.body}</h4>
            </div>
        ))}
    </div>
  )
}
