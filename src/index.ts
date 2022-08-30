window.onload = () => {
  (() => {
    const div = document.createElement("div");
    div.textContent = "Hi from esbuild";
    document.body.appendChild(div);
  })();
};
