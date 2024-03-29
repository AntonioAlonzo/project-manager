import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function TaskDeleteDialog({
  open,
  handler,
  taskTitle,
  confirmDelete,
}) {
  return (
    <Dialog open={open} handler={handler}>
      <DialogBody>Do you want to delete the task "{taskTitle}"?</DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handler} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={confirmDelete}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
