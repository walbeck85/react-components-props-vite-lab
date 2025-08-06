// About.jsx
// This component renders the blog's "About" section.
// It displays an image and a short description, both passed in as props.
// - If no `image` prop is provided, it defaults to a placeholder.
// - The `alt` text for the image is set to "blog logo" for accessibility.
import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;