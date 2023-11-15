import clsx from "clsx";

export default function BoxStatus({ status }) {
  return (
    <span
      className={clsx("inline-flex items-center  px-4 py-2 text-m", {
        "bg-red-500 text-white": status === "FAILED",
        "bg-gray-100 text-gray-500": status === "SUSPENDED",
        "bg-green-500 text-white": status === "STABLE",
      })}
    >
      {status === "FAILED" ? <>FAILED</> : null}
      {status === "SUSPENDED" ? <>SUSPENDED</> : null}
      {status === "STABLE" ? <>STABLE</> : null}
    </span>
  );
}
