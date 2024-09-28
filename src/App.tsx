import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import { IPost } from "./types";

import "./App.css";

function App() {
  const url = "http://localhost:3000/posts";
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  const addPost = (newPost: IPost) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        fetchPost();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updatePost = (id: string, updatedPost: IPost) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPost)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        fetchPost();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deletePost = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          fetchPost();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      return;
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <AddPostForm addPost={addPost} />
      <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
    </div>
  );
}

export default App;
