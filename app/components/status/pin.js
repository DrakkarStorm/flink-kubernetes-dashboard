import {
  CheckIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function PinStatus({ status }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-red-500 text-white": status === "FAILED",
          "bg-gray-100 text-gray-500":
            status === "FINISHED" || status === "CANCELLED",
          "bg-green-500 text-white": status === "RUNNING",
        }
      )}
    >
      {status === "FAILED" ? (
        <>
          FAILED
          <ExclamationCircleIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
      {status === "FINISHED" ? (
        <>
          FINISHED
          <CheckCircleIcon className="w-4 ml-1 text-gray-500" />
        </>
      ) : null}
      {status === "CANCELLED" ? (
        <>
          CANCELLED
          <ClockIcon className="w-4 ml-1 text-gray-500" />
        </>
      ) : null}
      {status === "RUNNING" ? (
        <>
          RUNNING
          <CheckIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
    </span>
  );
}
