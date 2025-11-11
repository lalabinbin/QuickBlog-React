import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo-lGLL0Zb0.png";
import { Input } from "@/components/ui/input";
import { DialogAuth } from "@/components/DialogAuth";
import HeroSection from "@/components/HeroSection";
import ListBlogs from "@/components/ListBlogs";
import { getDataBlog } from "@/services/api/blog";
function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchBlogs, setSearchBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await getDataBlog();
      setBlogs(response.data.items);
      setSearchBlogs(response.data.items);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setBlogs(searchBlogs);
      return;
    } else {
      const filterBlog = searchBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
      setBlogs(filterBlog);
    }
  };
  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <HeroSection
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <ListBlogs blogs={blogs} loading={loading} fetchBlogs={fetchBlogs} />
        </div>
      </div>
    </div>
  );
}

export default Home;
