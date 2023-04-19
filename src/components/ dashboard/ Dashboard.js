import React, { useState } from 'react'
import Posts from '../../posts/Posts';
import UpdatePost from '../updatePost/UpdatePost';

const  Dashboard = () => {

  let i = 4;
  const [postsState, setPostsState] = useState(
    [
      {id: 1, title: "Happiness", author: "John" },
      {id: 2, title: "MIU", author: "Dean" },
      {id: 3, title: "Enjoy Life", author: "Jasmine" }

    ]
  );

  const [postState, setPostState] = useState(
   {
    title : "default",
    author : ""
   } 
  );
  const onChange= (events)=>{
    const uptatedState = { ...postState , [events.target.name]: events.target.value};
    setPostState(uptatedState);
  }

  return (
    <div> 
      Dashbord
      <Posts posts = {postsState}/>
      <UpdatePost 
      title = {postState.title} 
      author = {postState.author}
      onChange = {(events)=>{onChange(events)}}    
     />
    </div>
  )
}

export default  Dashboard