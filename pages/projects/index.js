import Categories from "@/components/categories";
import { projects } from "../../lib/data";
import ProjectsList from "@/components/projectsList";
import Navbar from "@/components/navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar bgColor="bg-black" textColor="text-white" />
      <div className="flex ">
        <Categories />
        <ul className="flex flex-row">
          {/* <ul className="flex flex-row flex-grow"> */}
          {projects.map((project) => (
            <ProjectsList project={project} key={project.slug} />
          ))}
        </ul>
      </div>
    </>
  );
}
