const esbuild = require("esbuild");
const { readFile, writeFile, mkdir } = require("fs").promises;

(async () => {
  await mkdir("./lib");

  const script = esbuild.buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    format: "esm",
    target: ["esnext"],
    write: false,
  });

  const html = await readFile("src/index.html", "utf8");

  await writeFile(
    "lib/index.html",
    `<script>${script.outputFiles[0].text}</script>${html}`
  );
})();
