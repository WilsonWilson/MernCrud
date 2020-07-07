import React, { useState, useEffect } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './app.scss';
import renderHTML from 'react-render-html';
import { getUser, getToken } from './helpers';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => alert('error fetching posts'));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteConfirm = (slug) => {
    let answer = window.confirm('are you sure you want to delete this post?');
    if (answer) {
      deletePost(slug);
    }
  };

  const deletePost = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`, {
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        alert(response.date.message);
        fetchPosts();
      })
      .catch((error) => alert('error deleting post'));
  };

  return (
    <div className="container dark-on-white">
      <Nav />
      <h1>Bob's Beer &amp; Burgers</h1>
      {posts.map((post, i) => (
        <div className="row" key={post._id}>
          <div className="col brew-row">
            <div className="brew-item">
              <Link to={`/post/${post.slug}`}>
                <h2>{post.name}</h2>
                <div className="brew-sub-info row">
                  <span>{post.type}</span>
                  <span>{post.abv}</span>
                </div>
                <div className="brew-description">{renderHTML(post.description.substring(0, 270))}</div>

                <div className="brew-sub-info brewery row">
                  By:&ensp;
                  <span>{post.brewery}</span>
                  <span>
                    {post.brewCity}, {post.brewState}
                  </span>
                </div>

                <div className="price-list">
                  <div className="row space-between brew-price-containter">
                    <span className="brew-size">{post.brewSize1}</span>
                    <span className="dots"></span>
                    <span className="brew-price">{post.brewSize1Price}</span>
                  </div>
                </div>
              </Link>
            </div>

            {getUser() && (
              <div className="row edit-post-section">
                <Link to={`/post/update/${post.slug}`} className="btn">
                  Update
                </Link>
                <button onClick={() => deleteConfirm(post.slug)} className="btn">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default App;
