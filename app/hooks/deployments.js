const ITEMS_PER_PAGE = 6;

export async function fetchDeployments() {
  let deployments = [];

  await fetch("http://localhost:8080/api/deployments", {
    next: { revalidate: 10 },
  })
    .then((res) => res.json())
    .then((deploymentsFetch) => {
      deployments = deploymentsFetch;
    })
    .catch((error) => {
      throw new Error("Failed to fetch deployments.");
    });

  return deployments;
}

export async function fetchDeploymentsPages(query) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const deployments = await fetchDeployments();
    if (deployments.length == 0) {
      return 1;
    }

    return deployments.length % ITEMS_PER_PAGE;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of deployments.");
  }
}

export async function fetchFilteredDeployments(query, currentPage) {
  try {
    const deployments = await fetchDeployments();

    const maxItem = 10;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, maxItem);
    const filteredDeployments = deployments.slice(startIndex, endIndex);

    return filteredDeployments;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch deployments.");
  }
}

export async function fetchDeploymentByName(name) {
  const deployments = await fetchDeployments();
  return deployments.filter((deployment) => deployment.name === name)[0];
}
