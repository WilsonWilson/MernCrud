import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import "../singlePost/singlePost.scss";
import renderHTML from "react-render-html";

const SinglePost = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => setPost(response.data))
      .catch((error) => alert("Error loading post"));
  }, [props.match.params.slug]);

  const showSinglePost = () => (
    <div>
      <h1>{post.name}</h1>

      <div className="brew-sub-info row">
        <span>{post.type}</span>
        <span>{post.abv}</span>
      </div>

      <div className="brew-sub-info row">
        <span>{post.brewery}</span>
        <span>
          {post.brewCity}, {post.brewState}
        </span>
      </div>

      <div className="brew-description">{renderHTML(post && post.description)}</div>
    </div>
  );

  return (
    <div className="container single-post-container">
      <Nav />
      {post && showSinglePost()}
    </div>
  );
};

export default SinglePost;
