import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();
  #notes = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];
        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }

  listNotes(search) {
    return Array.from(this.#notes.entries())
      .map((notesArray) => {
        const id = notesArray[0];
        const data = notesArray[1];
        return {
          id,
          ...data,
        };
      })
      .filter((note) => {
        if (search) {
          return note.title.includes(search);
        }
        return true;
      });
  }

  createNotes(notes) {
    const notesId = randomUUID();
    this.#notes.set(notesId, notes);
  }
}
