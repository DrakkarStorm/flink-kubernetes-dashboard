import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;

const deployments = [
  {
    id: "1",
    name: "knada",
    cpu: "10",
    memory: "24",
    status: "FAILED",
  },
];

export async function fetchDeploymentsPages(query) {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return 1;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of deployments.");
  }
}

export async function fetchFilteredDeployments(query, currentPage) {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return deployments;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch deployments.");
  }
}

export async function fetchDeploymentByName(name) {
  return deployments.filter((deployment) => deployment.name === name)[0];
}
