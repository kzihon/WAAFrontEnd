import React from "react";
import "./updatePost.css";
const UpdatePost = (props) => {
  return (
    <div className="UpdatePost">
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

      <button onClick={props.addButtonClicked}>Update Post </button>
    </div>
  );
};

export default UpdatePost;
