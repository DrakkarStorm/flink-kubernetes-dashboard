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
        {deployment.status === "FAILED" || deployment.status === "STABLE" ? (
          <>
            <ActionButton action="cancel" id={params.name} />
          </>
        ) : null}
        {deployment.status === "SUSPENDED" ? (
          <>
            <ActionButton action="start" id={params.name} />
          </>
        ) : null}
        {deployment.status === "STABLE" ? (
          <>
            <div className="ml-4">
              <Link
                href={`https://${deployment.name}.knada.rancher.kosmos.fr`}
                rel="noopener noreferrer"
                target="_blank"
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
