// This component renders the blog's "About" section.
// It displays an image and a short description, both passed in as props.
// - If no `image` prop is provided, it defaults to a placeholder.
import React from "react";
// Destructure props with default value for image
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
// Export the About component as the default export
export default About;