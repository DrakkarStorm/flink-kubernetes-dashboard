import { PlayIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import { startJob, cancelJob } from "@/app/hooks/jobs";

export function ActionButton({ action, name }) {
  const startJobWithId = startJob.bind(null, name);
  const cancelJobWithId = cancelJob.bind(null, name);

  return (
    <form action={action === "start" ? startJobWithId : cancelJobWithId}>
      <button className="p-2 border rounded-md hover:bg-gray-100">
        <span className="inline-flex items-center px-2 py-1 rounded-full">
          {action === "start" && (
            <>
              <PlayIcon className="w-4 mr-2" />
              Start{" "}
            </>
          )}
          {action === "cancel" && (
            <>
              <PauseCircleIcon className="w-4 mr-2" />
              Cancel
            </>
          )}
        </span>
      </button>
    </form>
  );
}
