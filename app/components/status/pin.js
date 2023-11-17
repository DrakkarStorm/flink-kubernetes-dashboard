import {
  CheckIcon,
  CheckCircleIcon,
  Round,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

// Define an object as an "enum"
const FlinkJobStatusEnum = {
  CREATED: "CREATED",
  UPGRADING: "UPGRADING",
  DEPLOYED: "DEPLOYED",
  STABLE: "STABLE",
  SUSPENDED: "SUSPENDED",
  FAILED: "FAILED",
  ROLLING_BACK: "ROLLING_BACK",
  ROLLED_BACK: "ROLLED_BACK",
  RECONCILING: "RECONCILING",
};

export default function PinStatus({ status }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-red-500 text-white": status === FlinkJobStatusEnum.FAILED,
          "bg-gray-100 text-gray-500": status === FlinkJobStatusEnum.SUSPENDED,
          "bg-green-500 text-white": status === FlinkJobStatusEnum.STABLE,
          "bg-blue-500 text-white":
            status === FlinkJobStatusEnum.CREATED ||
            status === FlinkJobStatusEnum.DEPLOYED ||
            status === FlinkJobStatusEnum.RECONCILING,
        }
      )}
    >
      {status === FlinkJobStatusEnum.FAILED ? (
        <>
          FAILED
          <ExclamationCircleIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
      {status === FlinkJobStatusEnum.SUSPENDED ? (
        <>
          SUSPENDED
          <CheckCircleIcon className="w-4 ml-1 text-gray-500" />
        </>
      ) : null}
      {status === FlinkJobStatusEnum.STABLE ? (
        <>
          STABLE
          <CheckIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
      {status === FlinkJobStatusEnum.CREATED ||
      status === FlinkJobStatusEnum.DEPLOYED ||
      status === FlinkJobStatusEnum.RECONCILING ? (
        <>STARTING</>
      ) : null}
    </span>
  );
}
