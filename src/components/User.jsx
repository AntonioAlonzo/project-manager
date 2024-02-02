import { Avatar, Typography } from "@material-tailwind/react";

export default function User() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          withBorder={true}
          className="p-0.5"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
        </div>
      </div>
    </div>
  );
}
