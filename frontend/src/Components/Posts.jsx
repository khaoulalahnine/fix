import { useEffect, useState } from "react";
import api from "../api";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 border rounded">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
