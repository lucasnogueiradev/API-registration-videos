import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";
// import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabasePostgres();
// const database = new DatabaseMemory();

server.get("/videos", async (req) => {
  const search = req.query.search;
  const videos = await database.list(search);

  console.log("search", search);

  return videos;
});

server.post("/videos", async (req, reply) => {
  const { title, description, url } = req.body;

  await database.create({
    title,
    description,
    url,
  });

  console.log(database.list());

  return reply.status(201).send();
});

server.put("/videos/:id", async (req, reply) => {
  const videoId = req.params.id;
  const { title, description, url } = req.body;

  database.update(videoId, {
    title: title,
    description: description,
    url: url,
  });

  console.log(database.list());
  return reply.status(204).send();
});

server.delete("/videos/:id", async (req, reply) => {
  const videoId = req.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.listen(
  {
    host: "0.0.0.0",
    port: process.env.PORT || 3333,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);

app.post("/generate-pdf", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).send("No content provided");
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(content);
    const pdfBuffer = await page.pdf();

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="document.pdf"',
    });

    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).send("Error generating PDF");
  }
});

app.get("/empty-array", (req, res) => {
  res.json([]); // Retorna um array vazio
});
// NOTES

server.get("/notes", async (req) => {
  const search = req.query.search;
  const notes = await database.listNotes(search);

  console.log("search", search);

  return notes;
});

server.post("/notes", async (req, reply) => {
  const { title, description, date } = req.body;

  await database.createNotes({
    title,
    description,
    date,
  });

  console.log(database.list());

  return reply.status(201).send();
});
