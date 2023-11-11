import Search from "@/app/components/search";
import { Suspense } from "react";
import { Spinner } from "@/app/components/spinner";
import { TableJob } from "@/app/components/table";
import Pagination from "@/app/components/pagination";
import { fetchJobsPages } from "@/app/hooks/jobs";

export default async function Deployment({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchJobsPages(query);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Job</h1>
      </div>
      <div className="flex items-center justify-between gap-2 mt-4 md:mt-8">
        <Search placeholder="Search job..." />
      </div>
      <Suspense key={query + currentPage} fallback={<Spinner />}>
        <TableJob query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center w-full mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
