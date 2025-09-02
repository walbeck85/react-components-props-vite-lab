// This is the root component of the blog site.
// It renders the Header, About, and ArticleList components.
// Blog data is imported from blogData and passed down as props.

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Log blog data to inspect structure during development
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Blog header */}
      <Header name={blogData.name} />

      {/* Blog about section */}
      <About image={blogData.image} about={blogData.about} />

      {/* Blog articles */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;