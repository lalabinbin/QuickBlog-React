import CloudinaryUpload from "@/components/CloudinaryUpload";
import { Input } from "@/components/ui/input";
import { createBlog } from "@/services/api/blog";
// import tinymce
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";

function CreateBlog() {
  const [tag, setTag] = useState("");
  const [listTag, setListTag] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTags = (e) => {
    if (tag.trim() === "") return;
    setListTag([...listTag, tag.trim()]);
    setTag("");
  };
  const handleRemoveTags = (index) => {
    const newTags = [...listTag];
    newTags.splice(index, 1);
    setListTag(newTags);
  };
  const [file, setFile] = useState(null);

  const handleUploadFile = (file) => {
    setFile(file);
  };
  const handleCreateBlog = async () => {
    if (!title || !content) return toast.error("Please fill all fields");
    if (!file) return toast.error("Please upload an image");
    if (listTag.length === 0) return toast.error("Please add tags");
    setLoading(true);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await res.json();
    console.log("result", result);
    console.log("title", title);
    console.log("content", content);
    console.log("listTag", listTag);
    const payload = {
      title,
      content,
      tags: listTag,
      image: result.secure_url,
    };
    try {
      const data = await createBlog(payload);
      console.log("data:", data);
      setTag("");
      setListTag([]);
      setTitle("");
      setContent("");
      toast.success("Create blog success");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <h2 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
            📝 Create a New Blog
          </h2>
          <div className="grid gap-6">
            <form className="space-y-4">
              <div className="grid gap-2  ">
                <legend className="font-medium">Blog Image</legend>
                <CloudinaryUpload onUpload={handleUploadFile} />
              </div>
            </form>
            <div className="grid gap-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="title"
              >
                Blog Title
              </label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                id="title"
                placeholder="Enter blog title"
              />
            </div>
            <div className="grid gap-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="content"
              >
                Blog Content
              </label>
              <Editor
                value={content}
                onEditorChange={(newContent) => setContent(newContent)}
                apiKey="zlrgxk8ztcle83cdg1s6iof6y1f5y7z0bn2i7af1smf9tnf8"
                init={{
                  plugins: [
                    "lists",
                    "link",
                    "image",
                    "table",
                    "codesample",
                    "wordcount",
                    "preview",
                    "code",
                  ],
                  toolbar:
                    "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image table | code preview",
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                  uploadcare_public_key: "ebecaa6949c4b7a66fa3",
                }}
                initialValue="Welcome to TinyMCE!"
              />
            </div>
            <div className="grid gap-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="tag"
              >
                Blog Tag
              </label>
              <div className="flex gap-2">
                <Input
                  onChange={(e) => setTag(e.target.value)}
                  data-slot="input"
                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  id="tag"
                  placeholder="Enter blog tag"
                  value={tag}
                />
                <button
                  type="button"
                  onClick={handleAddTags}
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-white"
                >
                  Add Tag
                </button>
              </div>
              <div className="flex gap-2">
                {listTag.map((tag, index) => (
                  <span
                    key={index}
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-primary text-white"
                  >
                    {tag}
                    <span>
                      <svg
                        onClick={() => handleRemoveTags(index)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-x cursor-pointer w-3 h-3"
                      >
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </span>
                  </span>
                ))}
              </div>
              <button
                onClick={handleCreateBlog}
                disabled={loading}
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-fit mx-auto text-white"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <Spinner className="w-5 h-5 animate-spin" /> Creating blog
                  </div>
                ) : (
                  "Create Blog"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
