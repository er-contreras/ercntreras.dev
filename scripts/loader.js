async function loadComponent(placeholderId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const htmlContent = await response.text();
    const element = document.getElementById(placeholderId);

    if (element) {
      element.innerHTML = htmlContent;
    } else {
      console.warn(`Placeholder ID "${placeholderId}" not found in HTML.`);
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "sidebar", path: "components/sidebar.html" },
    { id: "summary", path: "components/summary.html" },
    { id: "dsl-examples", path: "components/dsl_examples.html" },
    { id: "interface-module-examples", path: "components/interface_module_examples.html" },
    { id: "middleware", path: "components/middleware.html" },
    { id: "error-handling", path: "components/error_handling.html" },
    { id: "architectural-examples", path: "components/architectural_examples.html" },
    { id: "review-once-in-a-while", path: "components/review_once_in_a_while.html" },
    { id: "suckless-config", path: "components/suckless_config.html" },
  ];

  components.forEach(comp => loadComponent(comp.id, comp.path));
});

