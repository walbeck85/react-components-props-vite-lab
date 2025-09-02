// The Header component displays the blog's name in an <h1>.
// It receives the blog name as a prop called 'name'.
import React from "react";
// Destructure name from props
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}
// Export the Header component as the default export
export default Header;