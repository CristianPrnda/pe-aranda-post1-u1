
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada:", new Date().toLocaleTimeString());
  console.log("Título del documento:", document.title);
  console.log("Secciones encontradas:",
    document.querySelectorAll("section").length);
});