"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
export function DropdownMenuDialog({ open, onOpenChange }) {
  return (
    <>
      <DropdownMenu open={open} onOpenChange={onOpenChange}>
        <DropdownMenuContent className="w-40" align="center">
          <DropdownMenuGroup>
            <DropdownMenuItem>New File...</DropdownMenuItem>
            <DropdownMenuItem>Share...</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
