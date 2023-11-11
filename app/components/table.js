import { fetchFilteredDeployments } from "@/app/hooks/deployments";
import { fetchFilteredJobs } from "@/app/hooks/jobs";
import PinStatus from "@/app/components/status/pin";
import Link from "next/link";

export async function TableDeployment({ query, currentPage }) {
  const deployments = await fetchFilteredDeployments(query, currentPage);

  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-gray-50 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  CPU
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Memory
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {deployments?.map((deployment, i) => (
                <tr
                  key={i}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Link href={`/dashboard/deployment/${deployment.name}`}>
                        <p className="hover:font-bold">{deployment.name}</p>
                      </Link>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {deployment.cpu}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {deployment.memory}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <PinStatus status={deployment.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function TableJob({ query, currentPage }) {
  const jobs = await fetchFilteredJobs(query, currentPage);

  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-gray-50 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tenant
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Version
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {jobs?.map((job, i) => (
                <tr
                  key={i}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Link href={`/dashboard/job/${job.name}`}>
                        <p className="hover:font-bold">{job.name}</p>
                      </Link>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">{job.tenant}</td>
                  <td className="px-3 py-3 whitespace-nowrap">{job.version}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <PinStatus status={job.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
