import { Input } from "@/components/ui/input";
import React from "react";

function CreateBlog() {
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
                <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
                  <label
                    for="blog-image"
                    className=" border-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
                  >
                    <span className="text-sm text-gray-600">
                      <div className="text-sm text-gray-600 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
                        >
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                          <path d="M7 9l5 -5l5 5"></path>
                          <path d="M12 4l0 12"></path>
                        </svg>
                        Click to upload image
                      </div>
                    </span>
                    <Input
                      data-slot="input"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hidden"
                      id="blog-image"
                      accept="image/*"
                      type="file"
                    />
                  </label>
                </div>
              </div>
            </form>
            <div className="grid gap-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                for="title"
              >
                Blog Title
              </label>
              <Input
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                id="title"
                placeholder="Enter blog title"
                value=""
              />
            </div>
            <div className="grid gap-2">
              <label
                data-slot="label"
                class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                for="content"
              >
                Blog Content
              </label>
              <Editor
                apiKey="zlrgxk8ztcle83cdg1s6iof6y1f5y7z0bn2i7af1smf9tnf8"
                init={{
                  plugins: [
                    //zlrgxk8ztcle83cdg1s6iof6y1f5y7z0bn2i7af1smf9tnf8
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    "table",
                    "visualblocks",
                    "wordcount",
                    // Your account includes a free trial of TinyMCE premium features
                    // Try the most popular premium features until Nov 16, 2025:
                    "checklist",
                    "mediaembed",
                    "casechange",
                    "formatpainter",
                    "pageembed",
                    "a11ychecker",
                    "tinymcespellchecker",
                    "permanentpen",
                    "powerpaste",
                    "advtable",
                    "advcode",
                    "advtemplate",
                    "ai",
                    "uploadcare",
                    "mentions",
                    "tinycomments",
                    "tableofcontents",
                    "footnotes",
                    "mergetags",
                    "autocorrect",
                    "typography",
                    "inlinecss",
                    "markdown",
                    "importword",
                    "exportword",
                    "exportpdf",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
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
                for="tag"
              >
                Blog Tag
              </label>
              <div class="flex gap-2">
                <Input
                  data-slot="input"
                  class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  id="tag"
                  placeholder="Enter blog tag"
                  value=""
                />
                <button
                  data-slot="button"
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-white"
                >
                  Add Tag
                </button>
              </div>
              <div class="flex gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
