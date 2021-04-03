import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;

nextApp.prepare().then(async () => {
  const app = express();

  app.all("*", (req, res) => nextHandler(req, res));

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
