import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDelete({ open, onOpenChange, handleDelete, user }) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-md ">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-red-500">
            Confirm delete "{user?.username}"
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to delete?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button className="bg-transparent border border-black-100 text-black-500 hover:bg-gray-100  hover:cursor-pointer">Cancel</Button>
          </DialogClose>
          <Button 
            className="bg-red-500 text-white hover:bg-red-600 hover:cursor-pointer"
            onClick={() => {
              handleDelete(user._id);
              onOpenChange(false);
            }}
            type="button"
            variant="secondary"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
