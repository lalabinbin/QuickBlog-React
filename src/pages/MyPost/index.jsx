import ListPosts from "@/components/ListPosts";
import React, { useContext, useEffect, useState } from "react";
import { getDataBlog } from "@/services/api/blog";
import { data } from "react-router-dom";
import AuthContext from "@/contexts/AuthContext";
function MyPost() {
  const [posts, setPosts] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [loading, setLoading] = useState(false);
  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getDataBlog();
      console.log("data:", data);
      setPosts(data.data.items);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userInfo) loadPosts();
  }, []);
  return (
    <div>
      <ListPosts posts={posts} loading={loading} userInfo={userInfo.id} role={userInfo.role} />
    </div>
  );
}

export default MyPost;
