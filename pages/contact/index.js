import Navbar from "@/components/navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar bgColor="bg-black" textColor="text-white" />
      <ul className="p-3 md:p-6">
        <li className="flex items-center">
          <h2 className="text-lg font-bold">E-mail </h2>
          :info@whitecubeatelier.com
        </li>
      </ul>
    </>
  );
}
