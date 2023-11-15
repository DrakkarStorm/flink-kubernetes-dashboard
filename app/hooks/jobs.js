import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;

export async function fetchJobs() {
  let jobs = [];

  await fetch("http://localhost:8080/api/jobs")
    .then((res) => res.json())
    .then((jobsFetch) => {
      jobs = jobsFetch;
    })
    .catch((error) => {
      throw new Error("Failed to fetch jobs.");
    });

  return jobs;
}

export async function fetchJobsPages(query) {
  try {
    const jobs = await fetchJobs();

    return jobs.length % ITEMS_PER_PAGE;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of jobs.");
  }
}

export async function fetchFilteredJobs(query, currentPage) {
  try {
    const jobs = await fetchJobs();

    const maxItem = 10;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, maxItem);
    const filteredJobs = jobs.slice(startIndex, endIndex);

    return filteredJobs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jobs.");
  }
}

export async function fetchJobByName(name) {
  const jobs = await fetchJobs();
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
