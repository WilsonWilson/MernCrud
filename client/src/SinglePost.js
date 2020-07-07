import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const SinglePost = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => setPost(response.data))
      .catch((error) => alert("Error loading post"));
  }, [props.match.params.slug]);

  return (
    <div className="container pb-5">
      <Nav />
      <h1>{post.name}</h1>
      <div className=""></div>
      <p>
        Author: {post.user} &emsp;|&emsp; Publised on {new Date(post.createdAt).toLocaleString()}
      </p>
      Notes:
      <p className="lead">{post.description}</p>
    </div>
  );
};

export default SinglePost;
