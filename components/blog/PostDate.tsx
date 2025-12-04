interface PostDateProps {
  date: string;
  label?: string;
}

export default function PostDate({ date, label = "Published on:" }: PostDateProps) {
  return <p>{label} {date}</p>;
}
