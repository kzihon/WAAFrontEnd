import React, { useEffect, useState } from 'react'
import Post from '../post/Post';
import axios from 'axios';
const POST_API_URL= 'http://localhost:8080/api/v1/posts'
const Posts = (props) => {
  console.log("PostRendered")

  // let i = 4;
  // const postList = 
  //   [
  //     {id: 1, title: "Happiness", author: "John" },
  //     {id: 2, title: "MIU", author: "Dean" },
  //     {id: 3, title: "Enjoy Life", author: "Jasmine" }

  //   ]
  // ;
  const [postState, setPostState] =useState([
        {id: 1, title: "Happiness", author: "John" },
        {id: 2, title: "MIU", author: "Dean" },
        {id: 3, title: "Enjoy Life", author: "Jasmine" }
  ])
 const fetchData= ()=>{
  axios.get(POST_API_URL)
  .then(response=>{
    setPostState(response.data)
  })
  .catch(error =>{
    console.log(error.message);
  })

 }
useEffect(()=>{fetchData()}, [props.flag]) 
 const dataFetched=postState;
  
  const posts = postState.map(post =>{
    return <Post 
            title = {post.title}
            author = {post.author}
            id ={post.id}
            key= {post.id}
            onClick ={ props.onPostId(post.id)}
            />
  })
  return <div>
    {posts}
    <button onClick={props.counterHandler}>From child</button>
  </div>;
}

export default Posts