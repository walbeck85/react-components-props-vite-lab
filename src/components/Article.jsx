// Article.jsx
// This component represents a single blog post preview.
// It receives props from ArticleList and displays:
// - the article title
// - the publication date (defaulting to "January 1, 1970" if not provided)
// - the article preview text

import React from "react";

// Destructure props with default value for date
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;