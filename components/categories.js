export default function Categories() {
  return (
    <ul className="flex flex-col p-6">
      <li className="text-sm px-2 py-1.5 hover:bg-black hover:text-white  rounded ml-2.5">
        All
      </li>
      <li> Categories</li>
      <ul className="text-sm ml-2.5">
        <li className="hover:bg-black hover:text-white  px-2 py-1.5 rounded">
          Residential
        </li>
        <li className="hover:bg-black hover:text-white  px-2 py-1.5 rounded">
          Villa
        </li>
        <li className="hover:bg-black hover:text-white px-2 py-1.5 rounded">
          Multi-use
        </li>
      </ul>
      <li>Status</li>
      <ul className="text-sm ml-2.5">
        <li className="hover:bg-black hover:text-white  px-2 py-1.5 rounded">
          In Progress
        </li>{" "}
        <li className="hover:bg-black hover:text-white  px-2 py-1.5 rounded">
          Completed
        </li>
      </ul>
    </ul>
  );
}
