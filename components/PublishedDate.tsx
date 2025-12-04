interface PublishedDateProps {
  date: string;
  label?: string;
}

export default function PublishedDate({ date, label = "Published on:" }: PublishedDateProps) {
  return <p>{label} {date}</p>;
}
