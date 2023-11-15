import { ActionButton } from "@/app/components/button";
import BoxStatus from "@/app/components/status/box";
import { fetchJobByName } from "@/app/hooks/jobs";
import Link from "next/link";

export default async function Page({ params }) {
  const job = await fetchJobByName(params.name);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Job: {params.name.toUpperCase()}</h1>
        <BoxStatus status={job.status} />
      </div>
      <div className="flex pt-5">
        {job.status === "FAILED" || job.status === "STABLE" ? (
          <>
            <ActionButton action="cancel" id={params.name} />
          </>
        ) : null}
        {job.status === "SUSPENDED" ? (
          <>
            <ActionButton action="start" id={params.name} />
          </>
        ) : null}
        {job.status === "STABLE" ? (
          <div className="ml-4">
            <Link
              href={`https://session-cluster-knada.knada.rancher.kosmos.fr/#/job/${job.id}/overview`}
              rel="noopener noreferrer"
              target="_blank"
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
