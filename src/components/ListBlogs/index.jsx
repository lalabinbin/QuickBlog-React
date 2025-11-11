import React, { useState } from "react";
import Logo from "@/assets/logo-lGLL0Zb0.png";
import { Input } from "@/components/ui/input";
import { DialogAuth } from "@/components/DialogAuth";
import { Link } from "react-router-dom";
import loadingFiles from "@/assets/loading_files.json";
import Lottie from "lottie-react";
import MyLoader from "@/components/MyLoader";
function ListBlogs({ blogs, fetchBlogs, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="shadow-lg rounded-lg p-4">
            <MyLoader />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {blogs.length === 0 && (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center">
          <div className="w-1/2 mx-auto">
            <Lottie
              animationData={loadingFiles}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
            <p className="text-center text-gray-500 text-xl font-medium mb-1">
              We cound not find any blog
            </p>
            <p className="text-center text-gray-500 text-xs">
              Please try again with a different search query.
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link to={`/blog-details/${blog._id}`}>
              <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <img
                  alt="test"
                  className="w-full h-48 object-cover"
                  src={blog.image}
                ></img>
                <div className="p-4 bg-card">
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {blog.title}
                  </h5>
                  <div className="text-foreground mb-2 text-xs">
                    {blog.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBlogs;
