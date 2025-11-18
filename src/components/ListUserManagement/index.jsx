import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast from "react-hot-toast";
import { deleteUser } from "@/services/api/user";
import { DialogDelete } from "../DialogDelete";
import { DialogChangeRole } from "../DialogChangeRole";
function ListUserManagement({ listUsers, setListUsers }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeRole, setOpenChangeRole] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
    const handleDelete = async (userId) => {
      try {
        await deleteUser(userId);
        toast.success("Delete user success");
        setListUsers(listUsers.filter((u) => u._id !== userId));
      } catch (err) {
        toast.error(err.message || "Delete user failed");
      }
    };

  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div className="overflow-auto">
          <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
            🧩 User Management
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[242px] text-start">USERNAME</TableHead>
                <TableHead className="w-[580px] text-start">EMAIL</TableHead>
                <TableHead className="w-[157px] text-start">ROLE</TableHead>
                <TableHead className="w-[259px] text-start">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listUsers.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span
                      data-slot="badge"
                      className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                    >
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => {setSelectedUser(user); setOpenDelete(true);}}
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
                      onClick={() => {setSelectedUser(user); setOpenChangeRole(true);}}
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
              ))}
            </TableBody>
          </Table>
          <DialogDelete open={openDelete} onOpenChange={setOpenDelete} handleDelete={handleDelete} user={selectedUser} />
          <DialogChangeRole open={openChangeRole} onOpenChange={setOpenChangeRole} />
        </div>
      </div>
    </div>
  );
}

export default ListUserManagement;
