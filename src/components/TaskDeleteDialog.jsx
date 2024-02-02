import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function TaskDeleteDialog(isOpen, onDialogOpen) {
  return (
    <Dialog open={isOpen} handler={onDialogOpen}>
      <DialogBody>Do you want to delete this task?</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={onDialogOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={onDialogOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
