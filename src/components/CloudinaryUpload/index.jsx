import React, { useState } from "react";
import { Input } from "../ui/input";

export default function CloudinaryUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <>
      <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
        <label
          onChange={handleUpload}
          for="blog-image"
          class=" border-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
        >
          <span class="text-sm text-gray-600">
            <div class="text-sm text-gray-600 flex items-center justify-center">
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
                class="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
              >
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 9l5 -5l5 5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
              Click to upload image
            </div>
          </span>
          <input
            data-slot="input"
            class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hidden"
            id="blog-image"
            accept="image/*"
            type="file"
          />
        </label>
        {preview && <img src={preview} />}
      </div>
    </>
  );
}
