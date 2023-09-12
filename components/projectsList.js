import Link from "next/link";

export default function ProjectsList({ project }) {
  return (
    <>
      <li className="hover card min-w-[280px] ">
        {/* <li className="text-gray-500 hover:text-black"> */}
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-col items-center"
        >
          <img
            className=" contrast-125"
            src="h4.jpg"
            alt="villa"
            width="200"
            height="200"
          />

          <h2 className="mt-4">{project.title}</h2>
          <div className="mb-1">
            {project.category} | {project.status} | {project.year}
          </div>
        </Link>
      </li>
    </>
  );
}
