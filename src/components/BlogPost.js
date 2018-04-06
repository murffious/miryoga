import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends Component {

    render () {
        return (
<div>
<header className="site-header">
  <div className="site-title">
    A Serverless Blog
  </div>
  <div className="site-subtitle">
    All the code that powers this blog is right here. 
  </div>
</header>

<main className="site-wrap">

  <div id="articles-list">
    <div className="articles-container" />
  </div>

</main>
</div>
)
}
}

export default BlogPost;