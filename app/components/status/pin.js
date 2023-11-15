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
          "bg-gray-100 text-gray-500": status === "SUSPENDED",
          "bg-green-500 text-white": status === "STABLE",
        }
      )}
    >
      {status === "FAILED" ? (
        <>
          FAILED
          <ExclamationCircleIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
      {status === "SUSPENDED" ? (
        <>
          SUSPENDED
          <CheckCircleIcon className="w-4 ml-1 text-gray-500" />
        </>
      ) : null}
      {status === "STABLE" ? (
        <>
          STABLE
          <CheckIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
    </span>
  );
}
