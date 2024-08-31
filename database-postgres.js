import { randomUUID } from "node:crypto";
import { sql } from "./dbsql.js";

export class DatabasePostgres {
  async list(search = "") {
    let videos;
    if (search) {
      videos = await sql`SELECT * FROM videos WHERE title ILIKE "%${search}%"`;
    } else {
      videos = await sql`SELECT * FROM videos`;
    }
    return videos;
  }

  async create(video) {
    const videoId = randomUUID();
    const { title, description, url } = video;
    await sql`
      INSERT INTO videos (id, title, description, url)
      VALUES (${videoId}, ${title}, ${description}, ${url})
    `;
    console.log("Video created.");
  }

  async update(id, video) {
    const { title, description, url } = video;
    await sql`
      UPDATE videos
      SET title = ${title}, 
      description = ${description}, 
      url = ${url}
      WHERE id = ${id}
    `;
    console.log("Video updated.");
  }

  async delete(id) {
    await sql`
      DELETE FROM videos
      WHERE id = ${id}
    `;
    console.log("Video deleted.");
  }

  async ListNotes(search = "") {
    let notes;
    if (search) {
      notes = await sql`SELECT * FROM notes WHERE title ILIKE "%${search}%"`;
    } else {
      notes = await sql`SELECT * FROM notes`;
    }
    return notes;
  }

  async createNotes(notes) {
    console.log("notes", notes);
    const notesId = randomUUID();
    const { title, description, date } = notes;
    await sql`
      INSERT INTO videos (id, title, description, date)
      VALUES (${notesId}, ${title}, ${description}, ${date})
    `;
    console.log("Notes created.");
  }
}
