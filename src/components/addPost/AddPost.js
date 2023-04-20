import React from "react";
import "./addPost.css";
const AddPost = (props) => {
  return (
    <div className="AddPost">
      <h1>Update a Post</h1>

      <label>Title</label>
      <input
        type="text"
        label={"Title"}
        name={"Title"}
        onChange={props.onChange}
        value={props.title}
      />

      <label>Author</label>
      <input
        type="text"
        label={"author"}
        name={"author"}
        onChange={props.onChange}
        value={props.author}
      />

      {/* <button onClick={props.addButtonClicked}>Update Post </button> */}
      <button onClick={()=>{props.postData }}> Add Post </button>
    </div>
  );
};

export default AddPost;
