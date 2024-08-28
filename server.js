import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();
const database = new DatabasePostgres();

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
    port: process.env.PORT || 3000,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
