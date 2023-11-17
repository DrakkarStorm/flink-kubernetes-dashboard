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

export default function BoxStatus({ status }) {
  return (
    <span
      className={clsx("inline-flex items-center  px-4 py-2 text-m", {
        "bg-red-500 text-white": status === FlinkJobStatusEnum.FAILED,
        "bg-gray-100 text-gray-500": status === FlinkJobStatusEnum.SUSPENDED,
        "bg-green-500 text-white": status === FlinkJobStatusEnum.STABLE,
        "bg-blue-500 text-white":
          status === FlinkJobStatusEnum.CREATED ||
          status === FlinkJobStatusEnum.DEPLOYED ||
          status === FlinkJobStatusEnum.RECONCILING,
      })}
    >
      {status === FlinkJobStatusEnum.FAILED ? <>FAILED</> : null}
      {status === FlinkJobStatusEnum.SUSPENDED ? <>SUSPENDED</> : null}
      {status === FlinkJobStatusEnum.STABLE ? <>STABLE</> : null}
      {status === FlinkJobStatusEnum.CREATED ||
      status === FlinkJobStatusEnum.DEPLOYED ||
      status === FlinkJobStatusEnum.RECONCILING ? (
        <>STARTING</>
      ) : null}
    </span>
  );
}
