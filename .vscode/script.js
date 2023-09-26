function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("claro");

  /* Pegar a img */
  const img = document.querySelector("#profile img");

  /* Substiruir a imagem */
  if (html.classList.contains("claro")) {
    img.setAttribute("src", "./assets/avatar-sun.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: "DevLinks",
        url: "file:///C:/Users/beles/Desktop/projeto/.vscode/index.html",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}
