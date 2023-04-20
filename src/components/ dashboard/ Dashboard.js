import React, { useState } from 'react'
import Posts from '../posts/Posts';
import UpdatePost from '../addPost/AddPost';
import axios from 'axios';
import PostDetails from '../postDetails/PostDetails';
const POST_API_URL= 'http://localhost:8080/api/v1/posts'

const  Dashboard = () => {

  
  const [postsState, setPostsState] = useState(
    [
      {id: 1, title: "Happiness", author: "John" },
      {id: 2, title: "MIU", author: "Dean" },
      {id: 3, title: "Enjoy Life", author: "Jasmine" }

    ]
  );

  const [postState, setPostState] = useState(
   {
    title : "",
    author : ""
   } 
  );
  const [flag, setFlag] = useState(false);

  const [postId, setPostId] = useState(0);

  const flagHandler= ()=>{
    setFlag(!flag)
  }
  
  const postData = ()=>{
    axios.post(POST_API_URL, postState)
    .then(data =>{
      console.log("success", data);
      flagHandler();
    })
    .catch(error=>{
      console.log("error", error)
    })
  }
  const onChange= (events)=>{
    const updatedState = { ...postState , [events.target.name]: events.target.value};
    setPostState(updatedState);
  }
  const onPostId= (id)=>{
    setPostId(id);
  }

  return (
    <div> 
      Dashbord
      <Posts posts = {postsState} flag ={flag} onPostId ={onPostId}/>
      <UpdatePost 
      title = {postState.title} 
      author = {postState.author}
      onChange = {(events)=>{onChange(events)}}    
      postData ={postData}
      flagHandler ={flagHandler}
     />
     <PostDetails postId = {postId}/>
    </div>
  )
}

export default  Dashboard