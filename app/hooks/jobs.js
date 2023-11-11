import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;

const jobs = [
  {
    name: "indicateur-visite-compte-v2",
    tenant: "knada",
    version: "1",
    status: "RUNNING",
  },
  {
    name: "indicateur-contenu-editorial",
    tenant: "knada",
    version: "2",
    status: "CANCELLED",
  },
  {
    name: "batch-etablissement",
    tenant: "knada",
    version: "3",
    status: "FINISHED",
  },
  {
    name: "batch-userdata",
    tenant: "knada",
    version: "4",
    status: "FINISHED",
  },
  {
    name: "batch-utilisateur",
    tenant: "knada",
    version: "5",
    status: "FINISHED",
  },
  {
    name: "batch-status-activation-mobile",
    tenant: "knada",
    version: "6",
    status: "FINISHED",
  },
];

export async function fetchJobsPages(query) {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return 1;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of jobs.");
  }
}

export async function fetchFilteredJobs(query, currentPage) {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return jobs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jobs.");
  }
}

export async function fetchJobByName(name) {
  return jobs.filter((job) => job.name === name)[0];
}

export async function startJob(id) {
  "use server";
  try {
    revalidatePath(`/dashboard/job/${id}`);
    return { message: "Started Job." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Started Job.",
    };
  }
}

export async function cancelJob(id) {
  "use server";
  try {
    revalidatePath(`/dashboard/job/${id}`);
    return { message: "Cancelled Job." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Cancel Job.",
    };
  }
}
