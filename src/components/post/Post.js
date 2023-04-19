import React from 'react'

const Post = (props) => {
  return (
    <div className='Content'>
      <h1>{props.id}</h1>
      <h1>{props.title}</h1>
      <h1>{props.author}</h1>

    </div>
  )
}

export default Post