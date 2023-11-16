const ITEMS_PER_PAGE = 6;

export async function fetchJobs() {
  let jobs = [];

  await fetch("http://localhost:8080/api/jobs", {
    next: { revalidate: 10 },
  })
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
    if (jobs.length == 0) {
      return 1;
    }

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

export async function startJob(name) {
  "use server";
  try {
    await updateJob(name, "running")

    revalidatePath(`/dashboard/job/${name}`);
    return { message: "Started Job." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Started Job.",
    };
  }
}

export async function cancelJob(name) {
  "use server";
  try {
    await updateJob(name, "suspended");

    revalidatePath(`/dashboard/job/${name}`);
    return { message: "Cancelled Job." };
  } catch (error) {
    console.log("Database Error: Failed to Cancel Job: ", error);

    return {
      message: "Database Error: Failed to Cancel Job.",
    };
  }
}

export async function updateJob(name, state) {
  const response = await fetch(`http://localhost:8080/api/jobs/${name}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
    body: JSON.stringify({state: state}),
  }).catch((error) => {
    throw new Error("Unable to fetch the api.");
  });

  if (!response.ok) {
    throw new Error("Unable to change the state of the job.");
  }
}
