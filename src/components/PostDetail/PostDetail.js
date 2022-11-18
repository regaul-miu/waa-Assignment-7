import React from "react";
import './PostDetail.css'

const PostDetail = (props)=>{
  const{title, author} = props.data;
  return(
    <div className="post-detail">
      <h4>Title: {title}</h4>
      <h5>Author: {author}</h5>
      <p>Some text about the post</p>
            <div className='detail-action'>
                <a href='/'>Edit</a>
                <a href='/'>Delete</a>
            </div>

    </div>
  );
};
export default PostDetail;