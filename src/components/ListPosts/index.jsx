import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteBlog, getDetailBlog } from "@/services/api/blog";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";

function ListPosts({ posts, userInfo, setPosts, loading, role }) {
  const myPosts =
    role === "admin"
      ? posts
      : posts?.filter((p) => userInfo && p.author?._id === userInfo) || [];
  const deletePost = async (postId) => {
    try {
      await deleteBlog(postId);
      toast.success("Delete post success");
      setPosts(myPosts.filter((p) => p._id !== postId));
    } catch (err) {
      toast.error(err.message || "Delete post failed");
    }
  };
  const getDetailsBlog = async (postId) => {
    await getDetailBlog(postId);
    window.location.href = `/blog-details/${postId}`;
  };
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div className="overflow-auto">
        <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
          ✍️ My Post
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[350px]">TITLE</TableHead>
              <TableHead className="w-[700px]">CONTENT</TableHead>
              <TableHead className="w-[170px]">ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="h-24 flex justify-center items-center"
                >
                  <Spinner className="w-8 h-8" />
                </TableCell>
              </TableRow>
            ) : myPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  You have no posts yet.
                </TableCell>
              </TableRow>
            ) : (
              myPosts.map((e) => (
                <TableRow key={e._id}>
                  <TableCell className="font-medium">{e.title}</TableCell>
                  <TableCell>
                    <div dangerouslySetInnerHTML={{ __html: e.content }} />
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => deletePost(e._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-trash-x w-5 h-5"
                      >
                        <path d="M4 7h16"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        <path d="M10 12l4 4m0 -4l-4 4"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => getDetailsBlog(e._id)}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-key w-5 h-5"
                      >
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                        <path d="M15 9h.01"></path>
                      </svg>
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ListPosts;
