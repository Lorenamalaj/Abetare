document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".Shkronjat button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const letter = button.textContent;
      const pageName = `${letter.toLowerCase()}.html`;
      window.location.href = pageName;
    });
  });
});
