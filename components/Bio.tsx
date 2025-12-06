import Image from "next/image";

export default function Bio() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <Image
        src="/images/omar-headshot.jpg"
        alt="Omar"
        width={150}
        height={150}
        className="rounded-full"
      />
      <p className="text-center max-w-md">
        {`Hi my name is Omar, I'm a software engineer that specializes in creating
        great front end experiences, primarily using react. When I'm not
        engineering I like to game and make music. Interested in talking to me
        about tech or working with me on a project? Reach out to me here.`}
      </p>
    </section>
  );
}
