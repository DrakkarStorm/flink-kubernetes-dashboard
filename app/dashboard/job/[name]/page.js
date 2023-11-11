import { ActionButton } from "@/app/components/button";
import BoxStatus from "@/app/components/status/box";
import { fetchJobByName } from "@/app/hooks/jobs";
import Link from "next/link";

export default async function Page({ params }) {
  const job = await fetchJobByName(params.name);
  console.log(job.status);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Job: {params.name.toUpperCase()}</h1>
        <BoxStatus status={job.status} />
      </div>
      <div className="flex pt-5">
        {job.status === "FAILED" ||
        job.status === "FINISHED" ||
        job.status === "RUNNING" ? (
          <>
            <ActionButton action="cancel" id={params.name} />
          </>
        ) : null}
        {job.status === "CANCELLED" ? (
          <>
            <ActionButton action="start" id={params.name} />
          </>
        ) : null}
        {job.status === "RUNNING" ? (
          <div className="ml-4">
            <Link
              href="#"
              className="inline-flex items-center p-3 border rounded-md hover:bg-gray-100"
            >
              FLink UI
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
