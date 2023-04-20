import axios from 'axios'
import React, { useEffect } from 'react'
import Post from '../post'

const POST_API_URL= 'http://localhost:8080/api/v1/posts'

const PostDetails = (props) => {

  const getPostById= (id)=>{
  axios.get(POST_API_URL,"/", id)
  .then(res=>{
    console.log(res.data);
  })
  .catch(e=>{
    console.log(e)
  })
}

getPostById(props.postId)
  return (
    <Post
            title = {post.title}
            author = {post.author}
            id ={post.id}
            key= {post.id}
          
            />
  )
}

export default PostDetails