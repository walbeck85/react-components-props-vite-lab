// ArticleList.jsx
// This component renders a list of Article components.
// It receives an array of blog post objects through the 'posts' prop.
// For each post, it renders an <Article> with appropriate props.
// Each article has a unique 'key' set to the post's 'id'.

import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;