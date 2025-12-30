import { format } from "date-fns";
interface PostDateProps {
  date: string;
  label?: string;
}

export default function PostDate({
  date,
  label = "Published on:",
}: PostDateProps) {
  const formattedDate = format(date, "LLLL d, yyyy");

  return (
    <p>
      {label} <time dateTime={date}>{formattedDate}</time>
    </p>
  );
}
