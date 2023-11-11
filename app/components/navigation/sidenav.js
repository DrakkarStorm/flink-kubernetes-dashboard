import Link from "next/link";
import NavLinks from "@/app/components/navigation/navlinks";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link
        className="flex items-end justify-start h-20 p-4 mb-2 bg-blue-600 rounded-md md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div className="flex flex-row items-center leading-none text-white ">
            <p className="text-5xl">Flink Board</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-row justify-between space-x-2 grow md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden w-full h-auto rounded-md grow bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
