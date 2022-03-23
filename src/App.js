import React from "react";
import Image from "./components/Image/Image.jsx";
import PostList from "./components/PostList/PostList.jsx";

const App = () => {
  return (
    <div>
      My App Component
      <hr />
      <PostList />
      <hr />
      <Image />
    </div>
  );
};

export default App;
