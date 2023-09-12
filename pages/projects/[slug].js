import { useRouter } from "next/router";
import { projects } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = projects.findIndex((volume) => volume.slug === slug);
  const volume = projects[volumeIndex];
  if (!volume) {
    return <p>it is not working</p>;
  }
  const { title, description, cover, books } = volume;
  return (
    <>
      <Navbar />
      <div className="p-3 ">
        <Link href="/projects" className="px-2">
          back
        </Link>
        <h1 className="text-2xl py-4">{title}</h1>
        <p>{description}</p>

        <Image src={cover} alt="efwfw" height={400} width={300} />
      </div>
    </>
  );
}
