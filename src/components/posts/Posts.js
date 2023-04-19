import React from 'react'
import Post from '../post/Post';
const Posts = (props) => {

  // let i = 4;
  // const postList = 
  //   [
  //     {id: 1, title: "Happiness", author: "John" },
  //     {id: 2, title: "MIU", author: "Dean" },
  //     {id: 3, title: "Enjoy Life", author: "Jasmine" }

  //   ]
  // ;

  const posts = props.posts.map(post =>{
    return <Post 
            title = {post.title}
            author = {post.author}
            id ={post.id}
            key= {post.id}
            />
  })
  return <div>
    {posts}
    <button onClick={props.counterHandler}>From child</button>
  </div>;
}

export default Posts