import Search from "@/app/components/search";
import { Suspense } from "react";
import { Spinner } from "@/app/components/spinner";
import { TableDeployment } from "@/app/components/table";
import Pagination from "@/app/components/pagination";
import { fetchDeploymentsPages } from "@/app/hooks/deployments";

export default async function Deployment({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchDeploymentsPages(query);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Deployment</h1>
      </div>
      <div className="flex items-center justify-between gap-2 mt-4 md:mt-8">
        <Search placeholder="Search deployment..." />
      </div>
      <Suspense key={query + currentPage} fallback={<Spinner />}>
        <TableDeployment query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center w-full mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
