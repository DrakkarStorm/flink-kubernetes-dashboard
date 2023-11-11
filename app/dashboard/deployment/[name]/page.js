import { ActionButton } from "@/app/components/button";
import BoxStatus from "@/app/components/status/box";
import { fetchDeploymentByName } from "@/app/hooks/deployments";
import Link from "next/link";

export default async function Page({ params }) {
  const deployment = await fetchDeploymentByName(params.name);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl">Deployment: {params.name.toUpperCase()}</h1>
        <BoxStatus status={deployment.status} />
      </div>
      <div className="flex pt-5">
        {deployment.status === "FAILED" ||
        deployment.status === "FINISHED" ||
        deployment.status === "RUNNING" ? (
          <>
            <ActionButton action="cancel" id={params.name} />
          </>
        ) : null}
        {deployment.status === "CANCELLED" ? (
          <>
            <ActionButton action="start" id={params.name} />
          </>
        ) : null}
        {deployment.status === "RUNNING" ? (
          <>
            <div className="ml-4">
              <Link
                href="#"
                className="inline-flex items-center p-3 border rounded-md hover:bg-gray-100"
              >
                FLink UI
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
