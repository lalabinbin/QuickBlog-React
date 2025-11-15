import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailBlog } from "@/services/api/blog";

function BlogDetails() {
  const [id, setId] = useState(useParams().id);
  const [detailsBlog, setDetailsBlog] = useState({});
  useEffect(() => {
    const getDetailsBlog = async () => {
      const response = await getDetailBlog(id);
      setDetailsBlog(response.data);
    };
    getDetailsBlog();
  }, [id]);
  return (
    <>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <div>
            <div className="text-center">
              <p className="text-primary font-medium">
                Published on November 2, 2025
              </p>
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto! py-4">
                {detailsBlog.title}
              </h1>
              <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
                {detailsBlog.tags}
              </p>
            </div>
            <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
              <img
                alt=""
                className="rounded-3xl mb-5 mx-auto"
                src={detailsBlog.image}
              />
            </div>
            <div className="blog-details rich-text max-w-3xl mx-auto px-4 text-left text-foreground">
              <p dangerouslySetInnerHTML={{ __html: detailsBlog.content }}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
